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
