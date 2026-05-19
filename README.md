# World Cup Album

FIFA World Cup 2026 sticker album tracker. Track which stickers you own, trade duplicates, and monitor your collection progress by team and group.

## Features

- Track owned stickers vs missing
- Manage duplicates for trading
- Insights dashboard: next milestone, teams almost complete, top teams, group progress
- Fast search by player name, team, or group
- Real-time progress tracking
- Fully responsive design

## Running Locally

```bash
# Start the Python server (requires Python 3.x)
python3 server.py

# Open in browser
open http://localhost:8765
```

The app stores your collection in `data.json` and reads player metadata from `players.json`.

## Structure

- `index.html` — Main app (HTML + CSS + JavaScript)
- `server.py` — Simple Python HTTP server
- `players.json` — Player metadata by team
- `data.json` — Your collection state

## Stack

- Vanilla JavaScript (no frameworks)
- Python 3 (server)
- HTML5 + CSS3
