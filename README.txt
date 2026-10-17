OF OIL & IRON COMPANION — v0.28.31
DYNAMIC ROSTER GENERATOR

Generate roster now constructs configurations on the device from the current
Rig, weapon, Ironclad and Equipment profiles. It does not select a squad from
a downloaded bank of prewritten proposals. No account or external service.

Choose Formation and Style: Random, Balanced, Fast, Firepower, Close combat.
The generator remains below the Quick game / Campaign squadron summary.
Engagement, side and terrain stay in Game setup; applying a proposal never
changes those settings. Tactical plans use the current Game setup and are
marked for review if that context or a loadout changes afterwards.

RULES AND FACTION OWNERSHIP
Only the selected faction's Rigs, each Rig's own profile weapons, and its
compatible common weapons are candidates. A matching name does not authorise
borrowing another faction's weapon profile. Hull weapons stay on Colossal
Hull mounts. Every Rig has two arm weapons, valid Equipment targets, no
repeated Equipment item and a loadout within its own Iron capacity.
Starting campaigns use one main faction, a Skirmish formation, Rookie or
Experienced Ironclads, and at most 15 Iron for the entire squadron.

HOW IT CHOOSES
The engine enumerates compatible bare armaments, constructs fresh Equipment
subsets and assignments, scores their suitability for the assigned mission
role, and solves the campaign's shared budget. The score includes declared
D6 attack expectations at sample distances, mobility, protection and support
Equipment. It is a tactical heuristic, not a win probability or a full battle
simulation. Paths depend on the actual battlefield and opponent.

Roles and melee/ranged alternatives vary between generations. Firepower keeps
ranged weapons on all Lights. Close combat retains melee capability and
covering fire. Useful identical weapons are still legal. Recent armament pairs
and up to 64 complete proposals are remembered per generator setup during the
current page session, including closing and reopening the generator. The engine
re-solves when it finds a recently repeated full proposal and a suitable
alternative fits. The set of legal combinations is finite; repetition later,
or with very restrictive choices, remains possible. A page reload clears this
short-term generation history, not your saved squads or campaigns.

The dynamic search is bounded for responsiveness. It is not exhaustive or
uniform over every mathematically legal loadout. Unstable Power Source and
Experimental Load-Bearing Frame require a sacrificial or cross-Rig plan and
are left to the manual builder; they remain available there under the normal
rules. Other conditional and campaign recovery items are considered only when
compatible; no particular item is promised on every generation.

PREVIEW AND SAVES
Inspect weapon profiles, Equipment and the role of each Rig before applying.
Every accepted Rig remains editable. Replacing a squad keeps a named backup.
Failed or cancelled construction does not modify the saved squad. Existing
campaigns and games in progress cannot be regenerated. Graphics, images,
intro, battle engine, PDF layout, save key and save schema are retained.

UPDATE
Extract the complete ZIP into your project. Include roster-engine.js,
roster-generator.js and all the other files. The former roster-data folder is
no longer used by this version and is not required. Commit and Sync using your
usual workflow, then check that the app header says v0.28.31. Keep the same
site address and browser data to retain local saves. Local saves do not sync
between devices. For a local preview, keep the files together and open
index.html in a browser.

See VERIFICA-v0.28.31.txt for this release's actual verification and limits.
CHANGELOG.txt records earlier releases; its old installation instructions and
bank statistics do not describe the current dynamic generator.
