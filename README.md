# Álbum de Cromos — Copa do Mundo 2026

Aplicação web responsiva para rastreamento de colecção de adesivos da Copa do Mundo 2026. Sincronização em tempo real através do Firebase e interface intuitiva para gestão da colecção pessoal.

## Funcionalidades

- **Rastreamento de Cromos** — Marcar cromos como possuído, duplicado ou em falta
- **Pesquisa Avançada** — Filtrar por jogador, equipa, grupo ou tipo de cromo
- **Análise de Colecção** — Progresso por grupo, equipas quase completas, próximas conquistas
- **Múltiplas Contas** — Gerir diferentes colecções (sincronizadas)
- **Sincronização em Tempo Real** — Dados actualizados instantaneamente entre dispositivos
- **Interface Responsiva** — Funciona perfeitamente em mobile, tablet e desktop
- **Exportação de Dados** — Copiar lista de duplicados ou em falta para partilhar

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript Vanilla (sem dependências externas)
- **Backend:** Firebase Realtime Database
- **Hospedagem:** GitHub Pages
- **Estrutura:** Modular e bem organizada (CSS, JS e HTML separados)

## Arquitectura

```
world-cup-2026-album/
├── index.html          # Estrutura HTML (9 linhas)
├── styles.css          # Estilos e temas (1370 linhas)
├── app.js              # Lógica principal e Firebase (1565 linhas)
├── players.json        # Base de dados de jogadores (14 KB)
├── data.json           # Dados iniciais
├── server.py           # Servidor Python opcional (desenvolvimento local)
└── README.md           # Este ficheiro
```

## Fluxo de Dados

```
┌──────────────┐
│  index.html  │ (Estrutura)
└──────────────┘
       ↓
┌──────────────┬──────────────┐
│  styles.css  │  app.js      │ (Apresentação + Lógica)
└──────────────┴──────────────┘
       ↓
┌──────────────────────────────┐
│  Firebase Realtime Database  │ (Sincronização)
└──────────────────────────────┘
```

## Como Usar

### Online (Sem Instalação)

Visita: https://e271aa.github.io/world-cup-2026-album

A aplicação funciona directamente no browser.

### Localmente (com Python)

```bash
# Executar servidor local
python server.py

# Abrir em browser
# http://localhost:8765
```

## Configuração do Firebase

O projeto usa Firebase Realtime Database para sincronização. A configuração está embebida em `app.js`:

```javascript
const FIREBASE_DB = 'https://world-cup-album-default-rtdb.europe-west1.firebasedatabase.app';
```

Se quiseres usar a tua própria base de dados Firebase:

1. Criar novo projecto em [Firebase Console](https://console.firebase.google.com)
2. Criar Realtime Database com regras públicas (para desenvolvimento)
3. Actualizar `FIREBASE_DB` em `app.js`

## Estrutura de Dados

### Formato de Cromos

```json
{
  "tipo": "jogador|treinador|técnico",
  "códigoEquipa": "BRA",
  "número": 1,
  "nomeJogador": "Alisson",
  "nomeEquipa": "Brasil",
  "bandeira": "🇧🇷",
  "grupo": "Grupo A"
}
```

### Dados Guardados

```json
{
  "tenho": [1, 5, 23, 45],
  "duplicados": {
    "1": 2,
    "23": 1
  },
  "conta2": {
    "tenho": [2, 10],
    "duplicados": {}
  }
}
```

## Desenvolvimento

### Modificar Estilos

Editar `styles.css` — todos os estilos estão documentados com comentários.

### Adicionar Funcionalidades

Editar `app.js` — As funções principais estão bem organizadas:
- `init()` — Inicialização
- `loadData()` — Carrega dados do Firebase
- `saveData()` — Guarda dados no Firebase
- `renderCromos()` — Renderiza interface
- `handleCromo()` — Lógica de cliques
- `initSearch()` — Pesquisa e filtros

### Estrutura de Ficheiros

- **CSS:** Separado em secções bem demarcadas (HEADER, GRID, FORMS, etc)
- **JS:** Funções organizadas logicamente com comentários explicativos
- **HTML:** Apenas a estrutura mínima necessária

## Melhorias Futuras

- [ ] PWA (Progressive Web App) — Funcionar offline
- [ ] Modo escuro — Tema dark
- [ ] Autenticação — Usar conta Google/Firebase Auth
- [ ] Partilha — Ligar com amigos para comparação
- [ ] Estatísticas — Gráficos e análises detalhadas
- [ ] QR Codes — Codificar informações de cromos

## Performance

- **Bundle:** Apenas 3 ficheiros (~112 KB total)
- **Dependências:** Zero (apenas JavaScript vanilla)
- **Carregamento:** ~500ms em conexão 3G
- **Sincronização:** Em tempo real via Firebase

---

Desenvolvido com ⚽ para coleccionadores de cromos.

**Última actualização:** Junho 2026
