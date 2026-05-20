#!/usr/bin/env python3
"""Servidor simples para o Álbum de Cromos.
Serve o HTML e expõe endpoints GET/POST /data para ler/escrever data.json."""

import http.server
import json
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / "data.json"
PORT = int(os.environ.get("PORT", 8765))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def _send_json(self, payload, status=200):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/data" or self.path.startswith("/data?"):
            if DATA_FILE.exists():
                try:
                    with open(DATA_FILE, "r", encoding="utf-8") as f:
                        data = json.load(f)
                except json.JSONDecodeError:
                    data = {}
            else:
                data = {}
            return self._send_json(data)
        elif self.path == "/players" or self.path.startswith("/players?"):
            players_file = BASE_DIR / "players.json"
            if players_file.exists():
                try:
                    with open(players_file, "r", encoding="utf-8") as f:
                        players = json.load(f)
                except json.JSONDecodeError:
                    players = {}
            else:
                players = {}
            return self._send_json(players)
        return super().do_GET()

    def do_POST(self):
        if self.path == "/data":
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length).decode("utf-8")
            try:
                data = json.loads(raw)
            except json.JSONDecodeError as e:
                return self._send_json({"ok": False, "error": str(e)}, status=400)

            tmp = DATA_FILE.with_suffix(".json.tmp")
            with open(tmp, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            os.replace(tmp, DATA_FILE)
            return self._send_json({"ok": True})

        self.send_response(404)
        self.end_headers()

    def log_message(self, format, *args):
        # Silenciar logs de cada request
        pass


if __name__ == "__main__":
    print(f"Servidor a correr em http://localhost:{PORT}")
    print(f"Dados guardados em: {DATA_FILE}")
    with http.server.ThreadingHTTPServer(("0.0.0.0", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor parado.")
