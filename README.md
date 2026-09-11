# Honeywild Wiki

A small, responsive player wiki for Honeywild, a Roblox game in development.

## Edit the wiki

- `data.js`: game name, article copy, categories, and article metadata.
- `game-data.js`: selected quest requirements, rewards, dialogue, and base equipment data checked in Studio on 2026-09-11.
- `app.js`: navigation, search, article layouts, and tables.
- `style.css`: colors, typography, desktop and mobile layouts.
- `assets/`: local artwork used by the wiki.

Change `WIKI_NAME` in `data.js` to rename the wiki. Also update the HTML title, footer, and any branded artwork when changing the game's name.

This site needs no build step. GitHub Pages should publish `main` from `/(root)`. All asset paths are relative, so it works at a repository subpath. The homepage opens by default; articles use links such as `#rocky`.

## Data accuracy

Entries marked “Configuration checked” use selected data read from the open Studio project on 11 September 2026. This does not establish parity with the publicly published Roblox version. Entries marked “Article in progress” have missing or unverified details. No player data, credentials, or game scripts are included.

## Artwork

The Honeywild banner is an existing AI-generated branding concept, not a gameplay screenshot. The Rocky image is an existing model preview. Item, egg, and flower images are existing project artwork. Their use here does not grant third parties a license to reuse game assets.

## Expanded catalog

`catalog-data.js` contains the selected Studio configuration snapshot. `catalog.js` turns it into articles; `asset-map.js` maps matching local artwork to lossless WebP files. The snapshot includes 31 bees, 9 NPCs, 210 items, 17 fields, 50 ability tokens, 3 regular mobs and 1 boss, plus hats and gear. NPC pages contain 82 regular/repeatable quests and 27 seasonal quests. Placeholder items, testing fields and seasonal content are labeled; configuration presence does not guarantee live availability. Re-export deliberately when the game changes; this is not a live Studio connection.

## Performance and security

Directories initially display 24 articles with Load more, and search returns at most 12 results. The background uses a separate compositing layer; scroll-related blur and image filters are removed. Selected artwork is lossless WebP. Independent sidebar and quest scrolling remain available.

The page has a restrictive Content Security Policy, local scripts/fonts/artwork, escaped dynamic text, validated article identifiers and asset paths, and a no-referrer policy. GitHub Pages enforces HTTPS. There is no login, backend or player-data storage. These controls reduce browser injection and unintended network requests; they are not a guarantee against all security issues. GitHub Pages cannot supply arbitrary response headers through this static repository, so a meta CSP cannot enforce frame-ancestors. Keep GitHub account access and repository permissions secure.

## Shops, obtaining and drops

`acquisition-data.js` contains the selected item-source and equipment configuration; `acquisition.js` builds each shop inventory, item obtaining tables, field-find tables and mob drop tables. The Starter and Rocky shop filters determine equipment stock; hidden hats are excluded. Normal Egg, Jel and Autumn Harvest have separate supply-shop pages. Equipment lives in its own category.

Obtaining entries link confirmed quest rewards, shops, mob drops, field finds, breakable variants, fireflies, equipment passives, level rewards, map pickups and the time-limited free pack. A missing documented source is not proof that an item is unobtainable. Seasonal and development conditions are shown. Boss-specific drops remain unconfirmed.

Mob percentages are base bonus-roll chances, not marginal per-kill probabilities: guaranteed tokens consume capacity first, bonus entries roll in order, and the physical-token cap can suppress later entries. Player Loot Luck and mob level modify rolls; honey scales with mob level. Field-find percentages are conditional on triggering a reward.

Directories use append-only **Load more**, 24 articles at a time. Filtering resets the displayed batch. Previously displayed cards retain their DOM nodes and measured sizes.


## Quest layout refresh

Quest lists now use normal document scrolling without a height limit. Opening a card near the bottom brings it into view. The quest tab uses the full article width, with requirements and rewards side by side on desktop and stacked on phones. Each card includes accepting, progress and completion dialogue accordions; the separate dialogue tab remains available. Article facts remain on the overview tab. The footer has been removed.

The homepage and article surfaces use a closer brown-and-gold reference treatment, a centered five-column desktop icon directory with centered final rows, and compact dialogue panels. Honeywild content and artwork are retained, along with the fixed sidebar, Load more, acquisition data and browser security restrictions.
