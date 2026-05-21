# World Cup Album

FIFA World Cup 2026 sticker album tracker. Track which stickers you own, trade duplicates, and monitor your collection progress by team and group.

## Funcionalidades

- Marcar cromos como tenho / duplicado
- Pesquisa rápida por jogador, equipa ou grupo
- Insights: próximo marco, equipas quase completas, progresso por grupo
- Sincronização automática entre browsers e dispositivos
- Responsive (mobile e desktop)

---

## Arquitetura atual — JSONBin (produção)

O app é 100% estático. Não há servidor. Os dados são guardados na cloud via [JSONBin.io](https://jsonbin.io).

### Como funciona

| Ação | O que acontece |
|---|---|
| Abrir o app | `loadData()` faz GET ao JSONBin e carrega os cromos |
| Marcar um cromo | `saveData()` faz PUT ao JSONBin com os dados atualizados |
| Abrir noutro browser | Lê os mesmos dados do JSONBin — sempre sincronizado |

### Configuração (index.html)

No topo do JavaScript estão duas constantes:

```js
const JSONBIN_KEY = '$2a$10$...';  // Master Key do JSONBin
const JSONBIN_BIN = '6a0ee6...';   // ID do Bin
```

Para obter estes valores:
1. Conta em [jsonbin.io](https://jsonbin.io)
2. **API Keys** → criar Master Key → copiar valor
3. **Bins** → criar Bin com `{"tenho":[],"duplicados":{}}` → copiar ID

### Endpoints usados

```
GET  https://api.jsonbin.io/v3/b/{BIN_ID}/latest   → carrega dados
PUT  https://api.jsonbin.io/v3/b/{BIN_ID}           → guarda dados
```

Header necessário em todos os pedidos: `X-Master-Key: {KEY}`

A resposta do GET vem dentro de `json.record`:
```json
{ "record": { "tenho": [...], "duplicados": {} }, "metadata": {...} }
```

### Hosting

Atualmente deployado no **Netlify** com domínio `cromos.e271aa.blog`.
Deploy automático a cada push para `main` no GitHub.

---

## Arquitetura alternativa — Servidor Python (local / Railway / Fly.io)

Para correr com o servidor Python em vez do JSONBin.

### Como funciona

O `server.py` serve o HTML estático e expõe dois endpoints REST:

```
GET  /data      → lê data.json e devolve o JSON
POST /data      → recebe JSON e escreve em data.json
GET  /players   → lê players.json e devolve o JSON
```

Os dados ficam guardados no ficheiro `data.json` no disco do servidor.

### Como voltar a esta arquitetura

**1. Reverter o `index.html`** — substituir as funções de carregar e guardar:

```js
// Remover as constantes JSONBin do topo:
// const JSONBIN_KEY = '...';
// const JSONBIN_BIN = '...';

// loadPlayers — mudar para:
async function loadPlayers() {
    const res = await fetch('/players', { cache: 'no-store' });
    if (res.ok) players = await res.json();
}

// loadData — mudar para:
async function loadData() {
    const res = await fetch('/data', { cache: 'no-store' });
    if (res.ok) {
        const remote = await res.json();
        if (remote && Array.isArray(remote.tenho)) {
            data = remote;
            ensureDataIntegrity();
            return;
        }
    }
    createFreshData();
}

// saveData — mudar para:
function saveData() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
        await fetch('/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }, 200);
}
```

**2. Correr localmente:**
```bash
python3 server.py
# Abre http://localhost:8765
```

**3. Deploy no Fly.io** (requer cartão para verificação):
```bash
brew install flyctl
fly auth login
fly apps create world-cup-album
fly volumes create album_data --region ams --size 1 -a world-cup-album
fly deploy
```

O `DATA_DIR` env var é lido pelo `server.py` — em produção aponta para o volume `/data`, localmente usa a pasta do projeto.

---

## Estrutura de ficheiros

```
index.html      → app completo (HTML + CSS + JS)
server.py       → servidor Python (só necessário na arquitetura alternativa)
players.json    → metadata dos jogadores por equipa
data.json       → snapshot local dos dados (referência / backup)
Dockerfile      → para deploy em containers
Procfile        → para Railway / Heroku
fly.toml        → configuração Fly.io
```

## Formato dos dados

```json
{
  "tenho": ["POR0", "POR1", "BEL0", "00", "FCW4"],
  "duplicados": { "POR0": 2, "BEL0": 1 }
}
```

Código de cada cromo: `{SIGLA}{NUMERO}` — ex: `POR8` = Portugal nº8 (Cristiano Ronaldo).  
Especiais: `00` (capa), `FCW1`–`FCW8` (FIFA World Cup cards).

## players.json

```json
{
  "especiais": { "00": "Capa", "FCW1": "..." },
  "equipas": {
    "POR": { "0": "Portugal Logo", "1": "Diogo Costa", "8": "Cristiano Ronaldo" },
    "BEL": { "0": "Bélgica Logo", "1": "..." }
  }
}
```
