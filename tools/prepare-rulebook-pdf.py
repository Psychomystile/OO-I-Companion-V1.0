"""Prepare the complete downloadable Rulebook without one oversized web asset.

Requires PyMuPDF and Pillow. Page text, fonts, vector content and page order
are retained; large image objects are recompressed for the downloadable copy.
The app's separate high-resolution reader images are never changed here.
"""
from pathlib import Path
import argparse
import base64
import hashlib
import io
import json
import tempfile

import fitz
from PIL import Image


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', help='Original, user-supplied Rulebook V1 PDF')
    parser.add_argument('--app-root', default=str(Path(__file__).resolve().parents[1]))
    parser.add_argument('--version', default='0.28.33')
    args = parser.parse_args()
    source, root = Path(args.source).resolve(), Path(args.app_root).resolve()
    original = fitz.open(source)
    assert len(original) == 121, 'This builder expects the supplied 121-page V1.'
    page_text = [p.get_text() for p in original]
    original.close()
    document = fitz.open(source)
    xrefs = {image[0] for page in document for image in page.get_images(full=True)}
    changed = 0
    for xref in sorted(xrefs):
        item = document.extract_image(xref)
        if len(item['image']) < 20000:
            continue
        image = Image.open(io.BytesIO(item['image']))
        image.load()
        mask = item.get('smask', 0)
        if image.mode not in ('RGB', 'L'):
            image = image.convert('RGB')
        # Preserve dimensions for images whose separate alpha mask must align.
        if not mask:
            image.thumbnail((1400, 2000), Image.Resampling.LANCZOS)
        compressed = io.BytesIO()
        image.save(compressed, 'JPEG', quality=75, optimize=True)
        data = compressed.getvalue()
        if len(data) < len(item['image']) * .95:
            document[0].replace_image(xref, stream=data)
            if mask:
                document.xref_set_key(xref, 'SMask', f'{mask} 0 R')
            changed += 1
    with tempfile.TemporaryDirectory() as temporary:
        output = Path(temporary) / 'rulebook.pdf'
        document.save(output, garbage=4, deflate=True, deflate_images=True, deflate_fonts=True)
        document.close()
        verified = fitz.open(output)
        assert len(verified) == len(page_text)
        assert [p.get_text() for p in verified] == page_text, 'Page text changed.'
        verified.close()
        pdf = output.read_bytes()
    assert pdf.startswith(b'%PDF-')
    destination = root / 'rulebook/pdf-data'
    destination.mkdir(parents=True, exist_ok=True)
    for stale in destination.glob('part-*.js'):
        stale.unlink()
    parts, chunk_size = [], 3 * 1024 * 1024
    for index, start in enumerate(range(0, len(pdf), chunk_size)):
        chunk = pdf[start:start + chunk_size]
        name = f'part-{index + 1:02}.js'
        payload = base64.b64encode(chunk).decode('ascii')
        (destination / name).write_text(
            f'/* Rulebook PDF part {index + 1}. */\n'
            f'globalThis.OOIRulebookPDF.accept({index},"{payload}");\n', encoding='utf-8')
        parts.append({'src': 'rulebook/pdf-data/' + name, 'bytes': len(chunk)})
    info = {'version': args.version, 'filename': 'of-oil-and-iron-rulebook-v1.pdf',
            'bytes': len(pdf), 'sha256': hashlib.sha256(pdf).hexdigest(),
            'pages': len(page_text), 'parts': parts}
    (destination / 'manifest.js').write_text(
        'globalThis.OOIRulebookPDFInfo=' + json.dumps(info, separators=(',', ':')) + ';\n',
        encoding='utf-8')
    check = dict(info, sourceSHA256=hashlib.sha256(source.read_bytes()).hexdigest(),
                 sourceBytes=source.stat().st_size, allPageTextIdentical=True,
                 imageObjectsRecompressed=changed)
    (root / 'tools/rulebook-pdf-check.json').write_text(json.dumps(check, indent=2) + '\n')
    print(f'Prepared {info["pages"]} pages, {len(pdf)} PDF bytes, {len(parts)} static parts.')


if __name__ == '__main__':
    main()
