# Honeywild Wiki

A small, responsive player wiki for Honeywild, a Roblox game in development.

## Edit the wiki

- `data.js`: game name, article copy, categories, and article metadata.
- `game-data.js`: selected quest requirements, rewards, dialogue, and base equipment data checked in Studio on 2026-09-11.
- `app.js`: navigation, search, article layouts, and tables.
- `style.css`: colors, typography, desktop and mobile layouts.
- `assets/`: local artwork used by the wiki.

Change `WIKI_NAME` in `data.js` to rename the wiki. Also update the HTML title and any branded artwork when changing the game's name.

This site needs no build step. GitHub Pages should publish `main` from `/(root)`. All asset paths are relative, so it works at a repository subpath. The homepage opens by default; articles use links such as `#rocky`.

## Data accuracy

Entries marked “Configuration checked” use selected data read from the open Studio project on 11 September 2026. This does not establish parity with the publicly published Roblox version. Entries marked “Article in progress” have missing or unverified details. No player data, credentials, or game scripts are included.

## Artwork

The Honeywild banner is an existing AI-generated branding concept, not a gameplay screenshot. The Rocky image is an existing model preview. Item, egg, and flower images are existing project artwork. Their use here does not grant third parties a license to reuse game assets.

## Expanded catalog

`catalog-data.js` contains the selected Studio configuration snapshot. `catalog.js` turns it into articles; `asset-map.js` maps matching local artwork to lossless WebP files. The snapshot includes 31 bees, 9 NPCs, 210 items, 17 fields, 50 ability tokens, 3 regular mobs and 1 boss, plus hats and gear. NPC pages contain 82 regular/repeatable quests and 27 seasonal quests. Placeholder items, testing fields and seasonal content are labeled; configuration presence does not guarantee live availability. Re-export deliberately when the game changes; this is not a live Studio connection.

## Performance and security

Directories initially display 24 articles with Load more, and search returns at most 12 results. The background uses a separate compositing layer; scroll-related blur and image filters are removed. Selected artwork is lossless WebP. The sidebar scrolls independently; quest lists use normal document scrolling.

The page has a restrictive Content Security Policy, local scripts/fonts/artwork, escaped dynamic text, validated article identifiers and asset paths, and a no-referrer policy. GitHub Pages enforces HTTPS. There is no login, backend or player-data storage. These controls reduce browser injection and unintended network requests; they are not a guarantee against all security issues. GitHub Pages cannot supply arbitrary response headers through this static repository, so a meta CSP cannot enforce frame-ancestors. Keep GitHub account access and repository permissions secure.

## Shops, obtaining and drops

`acquisition-data.js` contains the selected item-source and equipment configuration; `acquisition.js` builds each shop inventory, item obtaining tables, field-find tables and mob drop tables. The Starter and Rocky shop filters determine equipment stock; hidden hats are excluded. Normal Egg, Jel and Autumn Harvest have separate supply-shop pages. Equipment lives in its own category.

Obtaining entries link confirmed quest rewards, shops, mob drops, field finds, breakable variants, fireflies, equipment passives, level rewards, map pickups and the time-limited free pack. A missing documented source is not proof that an item is unobtainable. Seasonal and development conditions are shown. Boss-specific drops remain unconfirmed.

Mob percentages are base bonus-roll chances, not marginal per-kill probabilities: guaranteed tokens consume capacity first, bonus entries roll in order, and the physical-token cap can suppress later entries. Player Loot Luck and mob level modify rolls; honey scales with mob level. Field-find percentages are conditional on triggering a reward.

Directories use append-only **Load more**, 24 articles at a time. Filtering resets the displayed batch. Previously displayed cards retain their DOM nodes and measured sizes.


## Quest layout refresh

Quest lists now use normal document scrolling without a height limit. Opening a card near the bottom brings it into view. The quest tab uses the full article width, with requirements and rewards side by side on desktop and stacked on phones. Each card includes accepting, progress and completion dialogue accordions; the separate dialogue tab remains available. Article facts remain on the overview tab. The footer has been removed.

The homepage and article surfaces use a closer brown-and-gold reference treatment, a centered five-column desktop icon directory with centered final rows, and compact dialogue panels. Honeywild content and artwork are retained, along with the fixed sidebar, Load more, acquisition data and browser security restrictions.

## Equipment artwork and illustrated inventories

The wiki now renders the Starter and Rocky inventories as illustrated equipment cards with section shortcuts, rarity, base stats, honey prices and linked material costs. Equipment articles, comparison tables, reward rows and relevant drop tables include artwork. Duplicate opening text is omitted.

`equipment-art.js` maps 16 equipment articles and 2 mobs to transparent WebP model renders. Source models come from `ImportReady/ModelCollection_20260908`; Leafy Belt uses the updated StarterOliveBeltLowPolyV6 and the mud shoulders are rendered separately. The original `.blend` models are unchanged. School Backpack and Heavy Backpack are explicitly labeled untextured model previews because their Roblox-hosted texture assets could not be downloaded without authentication. Images use fixed dimensions and lazy loading; all 18 new renders total approximately 200 KB.

## Reference library and obtainable content

The public catalog now lists 174 articles at the September 11, 2026 check: 30 standard-roll bees, 41 items with documented acquisition sources, 46 associated ability tokens, and 8 general mechanics/reference pages, alongside equipment, NPCs, fields and mobs. Counts can change when seasonal acquisition windows close.

- `reference-data.js`: selected food effects, field color proportions, seasonal dates, and the owner's confirmation that Amber Field, Granite Mine, Quartz Quarry and Bush Field are playable.
- `availability.js`: excludes items without documented acquisition routes, testing fields, hidden equipment and bees without a confirmed normal-player source. This is conservative documentation filtering; an excluded item is not proven unobtainable. Charm Bee is excluded pending an acquisition source. Source snapshots remain intact for later review.
- `reference-content.js`: food/rest, favorite-food ascension, field colors, loot, equipment costs and player-level reward guides; linked item uses; per-bee hatch/reroll odds; enriched token timing and field tables.
- `reference-ui.js`: local XP and ascension calculators, homepage reference cards and article section shortcuts. Calculators do not store inputs or make network requests.
- `bee-guide-data.js` and `bee-guide.js`: verified bee statistics, six-level progression, probability tables and ability-card presentation.

Availability uses the game's configured seasonal windows and the reader's browser clock. The four field availability exceptions were explicitly confirmed by the owner. Other data is checked against Studio configuration and relevant handlers, not independently verified against the published Roblox build.

Normal-player acquisition evidence is required for catalog entries. Existing deep links to excluded entries show the normal not-found page; search, categories, probability tables and related links use the filtered catalog. Ant Egg is retained because the free pack actually grants it; its description still identifies it as a placeholder collectible rather than claiming a working hatch result.

Food calculations use 10 XP per ordinary food, 1 current energy restoration, and a shared +15 permanent food energy cap. Favorite-food probabilities use independent rolls with rarity-specific denominators. Individual bee probabilities use the rarity probability divided by its eligible roster size for direct hatching/Jel only.

Validation covers all public article links, retained/removed entries, calculator boundaries, rarity-specific odds, images, Load more, search escaping, CSP, and phone/tablet overflow. The standalone source snapshots are not a live Studio integration.

## Searchable reference tools

`discovery-tools.js` adds three pages using the already filtered public catalog:

- `#bee-comparison`: compare 30 bees, filter by color/rarity/name, sort selected base statistics, apply levels 1–6, and shortlist up to three bees with their base abilities. Listed amounts and timings are not claims of measured damage or nectar per second.
- `#item-source-finder`: search 41 obtainable items and their source descriptions, with quest/mob/field/shop/equipment/level/other filters. Results retain the acquisition table's chance and availability qualifications.
- `#quest-rewards`: filter 109 current quest entries by NPC, item reward, type and objective text. Each result links to the corresponding expanded NPC quest, for example `#rocky?quest=2`. Quest indices are one-based and validated; invalid indices open the normal overview.

Source and quest results append 12 entries per Load more action. Filters and shortlists are kept only within the current view; no cookies, browser storage or network calls are added. Comparison tables scroll horizontally on narrow screens and have a keyboard-focusable scroll region. Counts remain derived from the available catalog and event window.

The public article count is 177 with this update. Validation includes sort/scaling values, shortlist limits and keyboard focus, filtered methods/rewards, preserved DOM during Load more, direct quest reloads and invalid parameters, query escaping, and phone/tablet layouts.

## Shopping lists, field explorer and section links

`planning-tools.js` adds `#equipment-shopping-list` and `#field-explorer`, bringing the public article count to 179.

The shopping list covers 15 obtainable equipment entries, totals each selected purchase once, and aggregates shared materials. Entered honey/material quantities reduce the displayed outstanding amounts without changing game state. A list may include alternatives for the same equipment slot; it does not simulate a valid equipped loadout. Gear pages include a preselected “Plan this purchase” link.

Selected gear, honey and material quantities stay in JavaScript memory during navigation. A share link encodes only whitelisted equipment IDs, excludes owned quantities, ignores duplicate/unknown IDs, and can restore selected equipment after a reload. Clipboard access occurs only when the visitor clicks Copy list link; a selectable text-field fallback is available. No persistent browser storage, Roblox inventory access, or external API was added.

The field explorer covers 14 playable fields, filters region/resources, and sorts recorded color shares. Eleven fields have recorded flower mixes and three explicitly show unrecorded mixes. Resource percentages are conditional shares of successful field finds. Missing color values are not treated as zero.

Overview headings have section links such as `#feeding-and-energy?section=section-food-effects`. Targets are validated and scroll below the sticky header; unknown sections leave the ordinary page visible. Existing `?quest=N` links take priority when both parameters are present.

Validation covers combined shoulder costs (5,000 honey, 24 Pins, 6 Berry Chitin), inventory subtraction and invalid values, shared-list reload and malformed IDs, clipboard fallback, field ordering/resources, unknown mixes, section and quest links, and mobile layouts. Existing reference, discovery and quest tests also pass.

### Ability finder and glossary
The public reference library now has 181 articles. The ability finder searches 46 base abilities by effect or bee name, filters by obtainable bee, and displays base timing plus linked owners. Each ability article includes its obtainable bee table. The glossary defines 31 terms with links to existing guides. Both tools use append-only Load more, escaped search input, and responsive cards. Symbols are illustrative; no unverified token artwork or mechanics were added.

## October 30 browsing upgrade (local, awaiting publication)

- `browse-content.js` consolidates field colors, gathering finds, recorded mobs, and direct quest links. Quests append eight at a time.
- `browse-ui.js` adds grouped search with escaped literal highlighting, artwork where available, direct quest results, keyboard navigation, and expandable result groups. Item/equipment links show previews on hover/focus; touch opens a preview with an explicit full-article link. Escape, outside click, and close controls dismiss it.
- `release-data.js` keeps website releases separate from configuration refreshes. The current game snapshot is still September 11, 2026; October 30 is a website upgrade, not a game-data verification.
- Design references: the illustrated directory of https://spookyz10.github.io/MajesticBeesWiki/index.html and the grouped content/update visibility of https://stardewvalleywiki.com/Stardew_Valley_Wiki. No assets or game facts were copied from those sites.
- The free-pack-only Ant Egg expires automatically; at October 30 the public catalog contains 40 obtainable items and 30 bees. The four owner-confirmed fields stay included. These counts are snapshot/date dependent.

### Reviewed configuration refresh workflow

Run these scripts from the parent `wiki-prototype` directory. They operate only on PC files and do not upload anything.

1. Preserve the previous dist configuration and capture its public snapshot: `node snapshot-content.cjs capture dist 2026-09-11 2026-10-30 snapshots/before.json`.
2. Export and review fresh player-facing game configuration using its authoritative owners. Do not export private runtime state, player data, credentials, admin tools, or server-only implementation. Update the existing data files and verify availability decisions.
3. Capture the updated dist with its actual verified source date, using the SAME availability date as the comparison baseline: `node snapshot-content.cjs capture dist YYYY-MM-DD 2026-10-30 snapshots/after.json`.
4. Generate a reviewable diff: `node snapshot-content.cjs diff snapshots/before.json snapshots/after.json snapshots/changes.json`. Different availability dates are rejected so seasonal expiration is not reported as balance changes.
5. After reviewing values, record the local public entry: `node record-refresh.cjs snapshots/before.json snapshots/after.json dist/release-data.js`. It lists additions, removals, changed fields, and links. It refuses duplicate refresh dates. The article snapshot label follows the latest recorded configuration refresh.
6. Run the browser checks, review the release entry, and publish through the authorized repository workflow. Recording a diff does not itself verify that the Roblox live version matches Studio.

Local verification: `node verify-browse.cjs`, `node verify-reference-upgrade.cjs`, and the existing discovery/planning/quest/knowledge checks. `snapshot-content.cjs` evaluates only trusted local wiki scripts in a Node VM, not arbitrary user-provided code. Keep its inputs local and reviewed.

## Active-game refresh — 30 October 2026 (local)

This is a partial configuration refresh, not a claim that every page was re-exported. Current public counts at this date: 226 articles, 42 obtainable items, 30 base bees, 30 ascended signature pages, and 17 fields.

- Refreshed ToolConfig/BagsConfig, MobDefinitions/MobDropTables, FieldFindConfig, canonical field data, token descriptions and activation policies. Seven non-starter tool/bag recipes now include one Treat. Granite Roller base HP is 200.
- Six-color field charts, canonical locations, flower tiers/capacity, and restored Sandy fields now derive from current FieldCatalog.
- Ten guides: weather/temperature, oasis refreshing, butterflies, hive expansion, area unlocks, world calendar, egg smashing, mutations, ascended abilities, Good Wasp amulets.
- Starter Hammer and Starter Net obtaining comes from InventoryService's one-time starter grant. Regular amulet platforms were located in Workspace; developer platforms are not listed.
- Article-specific checkedDate replaces the misleading global refreshed date. Quests, old item definitions/other obtaining sources, and unrefreshed mechanics retain September dates. Relevant source notes explain mixed provenance.
- No unrestricted item/bee dump was enabled. Charm Bee, expired free-pack-only Ant Egg, hidden shop gear, developer platforms, and future-only weather text stay excluded. Bell-only weather, full upgrade-tree nodes, current quest wording/rewards, and net-preservation detail still need additional verification.
- PC rollback: ../backups/2026-10-30_wiki-active-refresh-pre. Extraction evidence is in research/; public scripts contain curated player-facing data, not runtime sources or player state.
- PASS verify-active-refresh.cjs and existing reference, planning, discovery, quest, knowledge, and browsing checks. Snapshot comparison: 45 additions, zero removals, 75 changed entries (compared at October 30 availability). The diff also reflects site content changes; it is not presented as 75 game balance changes.
- Publication remains pending the previous GitHub upload approval; no push was attempted in this pass.
## Quest and upgrade-tree refresh — 30 October 2026 (local)

The follow-up refresh replaces the older quest snapshot with 100 currently completable quests, including 27 active Autumn entries. The wiki now has 255 articles, including a searchable upgrade-tree browser and 28 upgrade pages with exact costs, effects, enforced requirements and links to all prerequisites. Both trees have connected maps; mobile readers can use cards and Load more.

Only obtainable tree branches are listed. Granite Mine and Magical Zone tree gates require 8 and 10 Rocky completions, while the current server caps that count at the five configured Rocky quests. Their 24 combined gates/descendants are excluded. Nine regular quests requiring advanced or enchantable equipment without a verified ordinary source are also excluded. The independent seasonal chains remain available during the event. No game rules were changed.

Original Studio scene captures now illustrate Rocky, Smasher Bear and Amber Field. The field capture is labeled as a layout reference without runtime flowers. Public images are in assets/game; originals and camera/source metadata remain in the PC research folder.

Validated exact quest data, upgrade availability, material/dependency links, search, map navigation, appended results, CSP and desktop/mobile layouts. Local preview: http://127.0.0.1:4188/ (`node preview.cjs 4188` from the parent folder). Publication remains pending the existing public GitHub upload approval.

## Approved public release — 31 October 2026

The owner explicitly approved publication of the selected game data and scene images to delamifo/honeywild-wiki. This supersedes the earlier pending-approval notes above. Game-data verification dates remain attached to their actual checks; publication does not imply a new game audit.
