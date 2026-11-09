OF OIL & IRON COMPANION — v0.28.33
RULEBOOK READING AND DOWNLOAD UPDATE

Open Rulebook in the main menu, or click a printed page reference in the app.
The page selector now shows page numbers only. Contents / Search keeps the
complete chapter index and whole-book text search. All 121 pages are included.

Double-click or double-tap the page to fill the screen. Repeat to restore the
floating window and its previous zoom and reading position. The X remains at
the top right in both modes. Escape leaves full-screen reading first; in the
floating window it closes the reader. Clicking or tapping outside also closes
the floating window. Your game and underlying scroll position are preserved.

On touchscreens, pinch with two fingers to zoom the BOOK PAGE from 50–400%.
The dialog, controls and X do not scale. Drag with one finger to pan a zoomed
page. At fit width, horizontal swipes turn pages. Desktop zoom buttons and the
Full screen button remain available in the floating view.

DOWNLOAD PDF
Download PDF prepares the complete 121-page PDF and downloads it. If a browser
requires another deliberate click, the same button becomes a ready download
link. The downloadable copy is approximately 20 MB: image objects have been
recompressed, while every page's text and the page order are preserved. The
reader's separate 2000-pixel page images remain unchanged. The original source
PDF is not modified. PDF data loads only when requested, from small local
assets in rulebook/pdf-data. This also works from file:// without a server.
rulebook-pdf.html provides an independent download fallback. Legacy PDF URLs
are redirected to that page on Netlify by the included _redirects file.

UPDATE
Extract and copy the ENTIRE archive into the app project, including rulebook/,
all new PDF download files, _redirects and index.html. In an existing project,
remove the obsolete rulebook/of-oil-and-iron-rulebook-v1.pdf file from v0.28.32;
it is replaced by the small PDF data assets. Commit and Sync as usual, then
check that the app header displays v0.28.33. Open index.html for a local test.
Keep the same site address and browser data for existing local saves.

The dynamic generator, gameplay, Quick game, campaign, save format, Rig images
and entry sequence are retained. The Rig-sheet PDF layout is unchanged; its
footer displays the new version. See VERIFICA-v0.28.33.txt for the checks run.
This archive does not perform a deployment.

REBUILDING MANUAL ASSETS (optional, developer use)
With PyMuPDF and Pillow installed, tools/build-rulebook-assets.py renders the
reader pages and index from the supplied Rulebook V1. Then run
tools/prepare-rulebook-pdf.py with that same original PDF to prepare the small
PDF download assets. Normal installation does not require these tools.
