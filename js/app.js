        // ============ FIREBASE / AUTH ============
        const firebaseConfig = {
            apiKey: "AIzaSyBQis2_U6ZXFu8DSvGCpcS7YrR_FS8MJ8k",
            authDomain: "world-cup-album.firebaseapp.com",
            databaseURL: "https://world-cup-album-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "world-cup-album",
            storageBucket: "world-cup-album.firebasestorage.app",
            messagingSenderId: "170397140451",
            appId: "1:170397140451:web:29b63e09f1f7782a810cd6"
        };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();

        // Devolve um token de ID fresco do utilizador autenticado (ou null).
        async function getIdToken() {
            const user = auth.currentUser;
            return user ? await user.getIdToken() : null;
        }

        // ============ DATA ============
        const FIREBASE_DB = 'https://world-cup-album-default-rtdb.europe-west1.firebasedatabase.app';

        const SPECIAL_CROMOS = ['00', 'FCW1', 'FCW2', 'FCW3', 'FCW4', 'FCW5', 'FCW6', 'FCW7', 'FCW8'];
        const ALLTHEFEELS_CROMOS = ['CC1', 'CC2', 'CC3', 'CC4', 'CC5', 'CC6', 'CC7', 'CC8', 'CC9', 'CC10', 'CC11', 'CC12'];
        const CROMO_NUMBERS = ['0','1','2','3','4','5','6','7','8','9','10','11'];

        const GROUPS = {
            'Insights': {
                key: 'insights',
                icon: '',
                teams: []
            },
            'Equipas': {
                key: 'equipas',
                icon: '',
                teams: []
            },
            'Trocas': {
                key: 'trocas',
                icon: '🔄',
                teams: []
            },
            'Especiais': {
                key: 'especiais',
                icon: '⭐',
                teams: []
            },
            '#ALLTHEFEELS': {
                key: 'allthefeels',
                icon: '❤️',
                teams: []
            },
            'Grupo A': {
                key: 'A', icon: '🇦',
                teams: [
                    { code: 'MEX', name: 'México', flag: '🇲🇽' },
                    { code: 'RSA', name: 'África do Sul', flag: '🇿🇦' },
                    { code: 'KOR', name: 'Coreia do Sul', flag: '🇰🇷' },
                    { code: 'CZE', name: 'República Checa', flag: '🇨🇿' }
                ]
            },
            'Grupo B': {
                key: 'B', icon: '🇧',
                teams: [
                    { code: 'CAN', name: 'Canadá', flag: '🇨🇦' },
                    { code: 'BIH', name: 'Bósnia-Herzegovina', flag: '🇧🇦' },
                    { code: 'QAT', name: 'Qatar', flag: '🇶🇦' },
                    { code: 'SUI', name: 'Suíça', flag: '🇨🇭' }
                ]
            },
            'Grupo C': {
                key: 'C', icon: '🇨',
                teams: [
                    { code: 'BRA', name: 'Brasil', flag: '🇧🇷' },
                    { code: 'MAR', name: 'Marrocos', flag: '🇲🇦' },
                    { code: 'HAI', name: 'Haiti', flag: '🇭🇹' },
                    { code: 'SCO', name: 'Escócia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }
                ]
            },
            'Grupo D': {
                key: 'D', icon: '🇩',
                teams: [
                    { code: 'USA', name: 'EUA', flag: '🇺🇸' },
                    { code: 'PAR', name: 'Paraguai', flag: '🇵🇾' },
                    { code: 'AUS', name: 'Austrália', flag: '🇦🇺' },
                    { code: 'TUR', name: 'Turquia', flag: '🇹🇷' }
                ]
            },
            'Grupo E': {
                key: 'E', icon: '🇪',
                teams: [
                    { code: 'GER', name: 'Alemanha', flag: '🇩🇪' },
                    { code: 'CUW', name: 'Curaçau', flag: '🇨🇼' },
                    { code: 'CIV', name: 'Costa do Marfim', flag: '🇨🇮' },
                    { code: 'ECU', name: 'Equador', flag: '🇪🇨' }
                ]
            },
            'Grupo F': {
                key: 'F', icon: '🇫',
                teams: [
                    { code: 'NED', name: 'Países Baixos', flag: '🇳🇱' },
                    { code: 'JPN', name: 'Japão', flag: '🇯🇵' },
                    { code: 'SWE', name: 'Suécia', flag: '🇸🇪' },
                    { code: 'TUN', name: 'Tunísia', flag: '🇹🇳' }
                ]
            },
            'Grupo G': {
                key: 'G', icon: '🇬',
                teams: [
                    { code: 'BEL', name: 'Bélgica', flag: '🇧🇪' },
                    { code: 'EGY', name: 'Egito', flag: '🇪🇬' },
                    { code: 'IRN', name: 'Irão', flag: '🇮🇷' },
                    { code: 'NZL', name: 'Nova Zelândia', flag: '🇳🇿' }
                ]
            },
            'Grupo H': {
                key: 'H', icon: '🇭',
                teams: [
                    { code: 'ESP', name: 'Espanha', flag: '🇪🇸' },
                    { code: 'CPV', name: 'Cabo Verde', flag: '🇨🇻' },
                    { code: 'KSA', name: 'Arábia Saudita', flag: '🇸🇦' },
                    { code: 'URU', name: 'Uruguai', flag: '🇺🇾' }
                ]
            },
            'Grupo I': {
                key: 'I', icon: '🇮',
                teams: [
                    { code: 'FRA', name: 'França', flag: '🇫🇷' },
                    { code: 'SEN', name: 'Senegal', flag: '🇸🇳' },
                    { code: 'IRQ', name: 'Iraque', flag: '🇮🇶' },
                    { code: 'NOR', name: 'Noruega', flag: '🇳🇴' }
                ]
            },
            'Grupo J': {
                key: 'J', icon: '🇯',
                teams: [
                    { code: 'ARG', name: 'Argentina', flag: '🇦🇷' },
                    { code: 'ALG', name: 'Argélia', flag: '🇩🇿' },
                    { code: 'AUT', name: 'Áustria', flag: '🇦🇹' },
                    { code: 'JOR', name: 'Jordânia', flag: '🇯🇴' }
                ]
            },
            'Grupo K': {
                key: 'K', icon: '🇰',
                teams: [
                    { code: 'POR', name: 'Portugal', flag: '🇵🇹' },
                    { code: 'COD', name: 'Congo DR', flag: '🇨🇩' },
                    { code: 'UZB', name: 'Uzbequistão', flag: '🇺🇿' },
                    { code: 'COL', name: 'Colômbia', flag: '🇨🇴' }
                ]
            },
            'Grupo L': {
                key: 'L', icon: '🇱',
                teams: [
                    { code: 'ENG', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
                    { code: 'CRO', name: 'Croácia', flag: '🇭🇷' },
                    { code: 'GHA', name: 'Gana', flag: '🇬🇭' },
                    { code: 'PAN', name: 'Panamá', flag: '🇵🇦' }
                ]
            }
        };

        let data = {};
        let players = {};
        let currentTab = 'Insights';
        let saveTimeout = null;

        async function loadPlayers() {
            try {
                const res = await fetch('data/players.json', { cache: 'no-store' });
                if (res.ok) {
                    players = await res.json();
                }
            } catch (e) {
                console.error('Erro ao ler players.json:', e);
            }
        }

        // Devolve true se autorizado e carregado; false se o acesso for negado.
        async function loadData() {
            try {
                const token = await getIdToken();
                const res = await fetch(`${FIREBASE_DB}/data.json?auth=${token}`, { cache: 'no-store' });
                if (res.status === 401 || res.status === 403) {
                    return false; // utilizador não autorizado pelas regras do Firebase
                }
                if (res.ok) {
                    const remote = await res.json();
                    if (remote && Array.isArray(remote.tenho)) {
                        data = remote;
                        ensureDataIntegrity();
                        return true;
                    }
                }
            } catch (e) {
                console.error('Erro ao ler dados:', e);
            }
            createFreshData(); // autorizado mas sem dados ainda
            return true;
        }

        function createFreshData() {
            data = { tenho: [], conta2: [], duplicados: {} };
            saveData();
        }

        function ensureDataIntegrity() {
            if (!Array.isArray(data.tenho)) data.tenho = [];
            if (!Array.isArray(data.conta2)) data.conta2 = [];
            if (!data.duplicados || typeof data.duplicados !== 'object') data.duplicados = {};
            if (!data.trades || typeof data.trades !== 'object') {
                data.trades = { pending: { given: [], received: [] }, history: [] };
            }
            if (!data.trades.pending || typeof data.trades.pending !== 'object') {
                data.trades.pending = { given: [], received: [] };
            }
            if (!Array.isArray(data.trades.pending.given)) data.trades.pending.given = [];
            if (!Array.isArray(data.trades.pending.received)) data.trades.pending.received = [];
            if (!Array.isArray(data.trades.saved)) data.trades.saved = [];
            if (!Array.isArray(data.trades.history)) data.trades.history = [];
        }

        // Helpers
        function cromoCode(type, teamCode, num) {
            if (type === 'especiais' || type === 'allthefeels') return num;
            return `${teamCode}${num}`;
        }

        function hasCromo(code) {   // conta 1
            return data.tenho.includes(code);
        }

        function hasConta2(code) {
            return data.conta2.includes(code);
        }

        function hasAny(code) {     // conta 1 ou conta 2
            return data.tenho.includes(code) || data.conta2.includes(code);
        }

        function getDups(code) {
            return data.duplicados[code] || 0;
        }

        function setConta2(code, val) {
            if (!Array.isArray(data.conta2)) data.conta2 = [];
            if (val) {
                // Conta 1 e Conta 2 são exclusivas
                const idx = data.tenho.indexOf(code);
                if (idx >= 0) { data.tenho.splice(idx, 1); delete data.duplicados[code]; }
                if (!data.conta2.includes(code)) data.conta2.push(code);
            } else {
                data.conta2 = data.conta2.filter(c => c !== code);
                delete data.duplicados[code];
            }
        }

        function setHas(code, val) {
            if (!Array.isArray(data.tenho)) data.tenho = [];
            const idx = data.tenho.indexOf(code);
            if (val && idx < 0) data.tenho.push(code);
            else if (!val && idx >= 0) {
                data.tenho.splice(idx, 1);
                delete data.duplicados[code];
            }
        }

        function setDups(code, n) {
            if (n > 0) data.duplicados[code] = n;
            else delete data.duplicados[code];
        }

        function saveData() {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(async () => {
                try {
                    ensureDataIntegrity();
                    const body = JSON.stringify(data);
                    const token = await getIdToken();
                    const res = await fetch(`${FIREBASE_DB}/data.json?auth=${token}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: body
                    });
                    if (!res.ok) {
                        const err = await res.text();
                        throw new Error(`Falha ao guardar (${res.status}): ${err}`);
                    }
                } catch (e) {
                    console.error('Erro ao guardar dados:', e);
                    console.error('Dados que falharam:', data);
                    showToast('⚠️ Erro ao guardar dados!');
                }
            }, 200);
        }

        // ============ RENDER TABS ============
        function renderTabs() {
            const container = document.getElementById('tabs');
            container.innerHTML = '';
            Object.entries(GROUPS).forEach(([name, group]) => {
                const btn = document.createElement('button');
                btn.className = 'tab' + (name === currentTab ? ' active' : '');
                btn.dataset.tab = name;

                if (name === 'Insights' || name === 'Equipas') {
                    btn.innerHTML = name;
                } else {
                    const stats = getGroupStats(name);
                    let displayName = name;
                    if (name === 'Especiais') displayName = '⭐ Especiais';
                    else if (name === '#ALLTHEFEELS') displayName = '❤️ #ALLTHEFEELS';
                    btn.innerHTML = `${displayName}<span class="tab-count">${stats.owned}/${stats.total}</span>`;
                }

                btn.onclick = () => switchTab(name);
                container.appendChild(btn);
            });
        }

        function switchTab(name) {
            currentTab = name;
            document.querySelectorAll('.tab').forEach(t => {
                t.classList.toggle('active', t.dataset.tab === name);
            });
            document.querySelectorAll('.panel').forEach(p => {
                p.classList.toggle('active', p.dataset.panel === name);
            });
        }

        // ============ RENDER CONTENT ============
        function renderContent() {
            const container = document.getElementById('content');
            container.innerHTML = '';

            Object.entries(GROUPS).forEach(([name, group]) => {
                const panel = document.createElement('div');
                panel.className = 'panel' + (name === currentTab ? ' active' : '');
                panel.dataset.panel = name;

                if (name === 'Insights') {
                    panel.innerHTML = `
                        <div class="panel-header">
                            <div class="panel-title">Insights da tua coleção</div>
                        </div>
                    `;
                    panel.appendChild(renderInsightsPanel());
                } else if (name === 'Equipas') {
                    panel.innerHTML = `
                        <div class="panel-header">
                            <div class="panel-title">Equipas</div>
                        </div>
                    `;
                    panel.appendChild(renderEquipasPanel());
                } else if (name === 'Trocas') {
                    panel.innerHTML = `
                        <div class="panel-header">
                            <div class="panel-title">🔄 Trocas</div>
                        </div>
                    `;
                    panel.appendChild(renderTrocasPanel());
                } else {
                    const stats = getGroupStats(name);
                    let titleText = name;
                    if (name === 'Especiais') titleText = '⭐ Cromos Especiais';
                    else if (name === '#ALLTHEFEELS') titleText = '❤️ Cartas #ALLTHEFEELS';
                    panel.innerHTML = `
                        <div class="panel-header">
                            <div class="panel-title">${titleText}</div>
                            <div class="panel-progress">${stats.owned} / ${stats.total} cromos</div>
                        </div>
                    `;

                    if (name === 'Especiais') {
                        const grid = document.createElement('div');
                        grid.className = 'cromos-grid';
                        SPECIAL_CROMOS.forEach(code => {
                            grid.appendChild(createCromo('especiais', null, code));
                        });
                        panel.appendChild(grid);
                    } else if (name === '#ALLTHEFEELS') {
                        const grid = document.createElement('div');
                        grid.className = 'cromos-grid';
                        ALLTHEFEELS_CROMOS.forEach(code => {
                            grid.appendChild(createCromo('allthefeels', null, code));
                        });
                        panel.appendChild(grid);
                    } else {
                        group.teams.forEach(team => {
                            panel.appendChild(createTeamSection(team));
                        });
                    }
                }

                container.appendChild(panel);
            });
        }

        function calculateInsights() {
            const teamStats = [];
            Object.entries(GROUPS).forEach(([name, group]) => {
                if (name === 'Insights' || name === 'Especiais' || name === '#ALLTHEFEELS' || name === 'Equipas' || name === 'Trocas') return;
                group.teams.forEach(team => {
                    const ownedNums = CROMO_NUMBERS.filter(n => hasAny(`${team.code}${n}`));
                    teamStats.push({ team, groupName: name, owned: ownedNums.length, ownedNums });
                });
            });

            let total = 0, owned = 0;
            SPECIAL_CROMOS.forEach(c => { total++; if (hasAny(c)) owned++; });
            ALLTHEFEELS_CROMOS.forEach(c => { total++; if (hasAny(c)) owned++; });
            Object.values(GROUPS).forEach(group => {
                group.teams.forEach(team => {
                    CROMO_NUMBERS.forEach(n => {
                        total++;
                        if (hasAny(`${team.code}${n}`)) owned++;
                    });
                });
            });

            const milestones = [25, 50, 75, 90, 100];
            const currentPct = total > 0 ? (owned / total) * 100 : 0;
            const nextMs = milestones.find(m => m > currentPct);
            const proximoMarco = nextMs ? {
                milestone: nextMs,
                needed: Math.ceil((nextMs / 100) * total) - owned
            } : null;

            const dupTotal = Object.values(data.duplicados).reduce((s, n) => s + n, 0);
            const dupList = Object.entries(data.duplicados).filter(([_, n]) => n > 0);

            const gruposCompletos = [];
            const gruposProgresso = [];
            Object.entries(GROUPS).forEach(([name]) => {
                if (name === 'Insights' || name === 'Especiais' || name === '#ALLTHEFEELS' || name === 'Equipas' || name === 'Trocas') return;
                const s = getGroupStats(name);
                gruposProgresso.push({ name, owned: s.owned, total: s.total, pct: Math.round((s.owned / s.total) * 100) });
                if (s.owned === s.total) gruposCompletos.push(name);
            });

            return {
                quaseLa: teamStats.filter(t => t.owned >= 10 && t.owned < 12).sort((a, b) => b.owned - a.owned),
                topTeams: teamStats.filter(t => t.owned < 12).sort((a, b) => b.owned - a.owned).slice(0, 3),
                completas: teamStats.filter(t => t.owned === 12),
                naoComecaste: teamStats.filter(t => t.owned === 0),
                gruposCompletos,
                gruposProgresso: gruposProgresso.sort((a, b) => b.pct - a.pct),
                proximoMarco,
                dupTotal,
                dupList
            };
        }

        function getPlayerName(teamCode, num) {
            return players.equipas && players.equipas[teamCode] ? (players.equipas[teamCode][num] || `#${num}`) : `#${num}`;
        }

        function getMissingForTeam(teamCode) {
            return CROMO_NUMBERS
                .filter(n => !hasAny(`${teamCode}${n}`))
                .map(n => `${teamCode}${n} ${getPlayerName(teamCode, n)}`);
        }

        function renderInsightsPanel() {
            const i = calculateInsights();
            const wrap = document.createElement('div');
            wrap.className = 'insights';

            // Próximo marco
            if (i.proximoMarco) {
                const card = document.createElement('div');
                card.className = 'insight-card highlight';
                card.innerHTML = `
                    <div class="insight-title">Próximo marco</div>
                    <div class="insight-big">${i.proximoMarco.needed} cromos</div>
                    <div class="insight-sub">para chegares aos ${i.proximoMarco.milestone}% da coleção</div>
                `;
                wrap.appendChild(card);
            }

            // Quase a completar
            const quase = document.createElement('div');
            quase.className = 'insight-card';
            let quaseHtml = `<div class="insight-title">Quase a completar</div>`;
            if (i.quaseLa.length === 0) {
                quaseHtml += `<div class="insight-empty">Ainda não tens equipas com 10+ cromos</div>`;
            } else {
                quaseHtml += `<div class="insight-list">` + i.quaseLa.map(t => `
                    <div class="insight-item">
                        <div class="insight-item-head">
                            <span class="team-flag">${t.team.flag}</span>
                            <strong>${t.team.name}</strong>
                            <span class="badge">${t.owned}/12</span>
                        </div>
                        <div class="insight-missing">Falta${12 - t.owned > 1 ? 'm' : ''}: ${getMissingForTeam(t.team.code).join(', ')}</div>
                    </div>
                `).join('') + `</div>`;
            }
            quase.innerHTML = quaseHtml;
            wrap.appendChild(quase);

            // Top equipas
            const top = document.createElement('div');
            top.className = 'insight-card';
            let topHtml = `<div class="insight-title">As tuas top equipas</div>`;
            if (i.topTeams.length === 0) {
                topHtml += `<div class="insight-empty">Sem dados</div>`;
            } else {
                topHtml += `<div class="insight-list">` + i.topTeams.map((t, idx) => `
                    <div class="insight-item">
                        <div class="insight-item-head">
                            <span class="rank">${idx + 1}.</span>
                            <span class="team-flag">${t.team.flag}</span>
                            <strong>${t.team.name}</strong>
                            <span class="badge">${t.owned}/12</span>
                        </div>
                    </div>
                `).join('') + `</div>`;
            }
            top.innerHTML = topHtml;
            wrap.appendChild(top);

            // Equipas completas
            if (i.completas.length > 0) {
                const comp = document.createElement('div');
                comp.className = 'insight-card success';
                comp.innerHTML = `
                    <div class="insight-title">Equipas completas (${i.completas.length})</div>
                    <div class="insight-list">` + i.completas.map(t => `
                        <div class="insight-item">
                            <div class="insight-item-head">
                                <span class="team-flag">${t.team.flag}</span>
                                <strong>${t.team.name}</strong>
                                <span class="badge ok">12/12</span>
                            </div>
                        </div>
                    `).join('') + `</div>`;
                wrap.appendChild(comp);
            }

            // Ainda não começaste
            const nao = document.createElement('div');
            nao.className = 'insight-card';
            let naoHtml = `<div class="insight-title">Ainda não começaste</div>`;
            if (i.naoComecaste.length === 0) {
                naoHtml += `<div class="insight-empty">Já tens pelo menos 1 cromo de cada equipa!</div>`;
            } else {
                naoHtml += `<div class="insight-list">` + i.naoComecaste.map(t => `
                    <div class="insight-item">
                        <div class="insight-item-head">
                            <span class="team-flag">${t.team.flag}</span>
                            <strong>${t.team.name}</strong>
                            <span class="badge zero">0/12</span>
                        </div>
                    </div>
                `).join('') + `</div>`;
            }
            nao.innerHTML = naoHtml;
            wrap.appendChild(nao);

            // Grupos
            const grupos = document.createElement('div');
            grupos.className = 'insight-card';
            let grHtml = `<div class="insight-title">Progresso por grupo</div>`;
            grHtml += `<div class="insight-list">` + i.gruposProgresso.map(g => `
                <div class="insight-item">
                    <div class="insight-item-head">
                        <strong>${g.name}</strong>
                        <span class="badge ${g.owned === g.total ? 'ok' : ''}">${g.owned}/${g.total} (${g.pct}%)</span>
                    </div>
                    <div class="mini-bar"><div class="mini-bar-fill" style="width: ${g.pct}%"></div></div>
                </div>
            `).join('') + `</div>`;
            grupos.innerHTML = grHtml;
            wrap.appendChild(grupos);

            // Duplicados
            const dup = document.createElement('div');
            dup.className = 'insight-card';
            let dupHtml = `<div class="insight-title">Duplicados para trocar</div>`;
            if (i.dupTotal === 0) {
                dupHtml += `<div class="insight-empty">Não tens duplicados</div>`;
            } else {
                dupHtml += `<div class="insight-big">${i.dupTotal} cromos</div>`;
                // Agrupar duplicados por equipa e mostrar o nome do jogador
                const dupGrupos = {};
                i.dupList.forEach(([code, n]) => {
                    const info = getCromoInfo(code);
                    if (!info) return;
                    if (!dupGrupos[info.teamCode]) {
                        dupGrupos[info.teamCode] = { flag: info.teamFlag, name: info.teamName, items: [] };
                    }
                    dupGrupos[info.teamCode].items.push({ num: info.num, playerName: info.playerName, n });
                });
                const equipasOrdenadas = Object.values(dupGrupos).sort((a, b) => a.name.localeCompare(b.name, 'pt'));
                dupHtml += `<div class="dup-groups">` + equipasOrdenadas.map(g => {
                    const total = g.items.reduce((s, it) => s + it.n, 0);
                    const linhas = g.items
                        .sort((a, b) => (parseInt(a.num) || 0) - (parseInt(b.num) || 0))
                        .map(it => `
                            <div class="dup-row">
                                <span class="dup-num">${it.num}</span>
                                <span class="dup-name">${it.playerName || '—'}</span>
                                <span class="dup-x">×${it.n}</span>
                            </div>
                        `).join('');
                    return `
                        <div class="dup-group">
                            <div class="dup-group-head">
                                <span class="dup-flag">${g.flag}</span>
                                <span class="dup-team">${g.name}</span>
                                <span class="dup-group-count">${total}</span>
                            </div>
                            <div class="dup-group-items">${linhas}</div>
                        </div>
                    `;
                }).join('') + `</div>`;
            }
            dup.innerHTML = dupHtml;
            wrap.appendChild(dup);

            return wrap;
        }

        function createTeamSection(team) {
            const div = document.createElement('div');
            div.className = 'team';

            const owned = CROMO_NUMBERS.filter(n => hasAny(`${team.code}${n}`)).length;

            div.innerHTML = `
                <div class="team-header">
                    <div class="team-name">
                        <span class="team-flag">${team.flag}</span>
                        <span class="team-code">${team.code}</span>
                        <span>${team.name}</span>
                    </div>
                    <div class="team-progress">${owned}/12</div>
                </div>
            `;

            const grid = document.createElement('div');
            grid.className = 'cromos-grid';
            CROMO_NUMBERS.forEach(num => {
                grid.appendChild(createCromo('equipas', team.code, num));
            });
            div.appendChild(grid);
            return div;
        }

        function createCromo(type, teamCode, num) {
            const code = cromoCode(type, teamCode, num);
            let displayCode = '';
            if (type === 'especiais') displayCode = 'FIFA';
            else if (type === 'allthefeels') displayCode = '#FEELS';
            else displayCode = `${teamCode}${num}`;

            const c1 = hasCromo(code);
            const c2 = hasConta2(code);
            const dups = getDups(code);

            let playerName = '';
            if (type === 'especiais') {
                playerName = players.especiais ? (players.especiais[num] || '') : '';
            } else if (type === 'allthefeels') {
                playerName = players.allthefeels ? (players.allthefeels[num] || '') : '';
            } else {
                playerName = players.equipas && players.equipas[teamCode] ? (players.equipas[teamCode][num] || '') : '';
            }

            const el = document.createElement('div');
            el.className = 'cromo';
            if (c2)      el.classList.add('conta2');
            else if (c1) el.classList.add('owned');

            const statusText = c2 ? '✓ Conta 2' : c1 ? '✓ Conta 1' : '';

            el.innerHTML = `
                <div class="cromo-code">${displayCode}</div>
                <div class="cromo-num">${num}</div>
                ${playerName ? `<div class="cromo-player">${playerName}</div>` : ''}
                <div class="cromo-status">${statusText}</div>
                ${dups > 0 ? `<div class="dup-badge">+${dups}</div>` : ''}
                <div class="cromo-controls">
                    <button class="cromo-btn" data-action="add" title="Avançar">+</button>
                    <button class="cromo-btn" data-action="remove" title="Recuar">−</button>
                </div>
            `;

            el.addEventListener('click', (e) => {
                const btn = e.target.closest('.cromo-btn');
                const _c1 = hasCromo(code);
                const _c2 = hasConta2(code);
                const d = getDups(code);
                if (btn) {
                    e.stopPropagation();
                    if (btn.dataset.action === 'add') {
                        if (!_c1 && !_c2)     setHas(code, true);       // Adiciona à C1
                        else                  setDups(code, d + 1);      // +1 duplicado (C1 ou C2)
                    } else {
                        if (d > 0)            setDups(code, d - 1);      // Remove duplicado
                        else if (_c2)         setConta2(code, false);    // Remove da C2
                        else if (_c1)         setHas(code, false);       // Remove da C1
                    }
                } else {
                    // Ciclo principal: nenhum → C1 → C2 → nenhum
                    if (!_c1 && !_c2)         setHas(code, true);
                    else if (_c1)             { setHas(code, false); setConta2(code, true); }
                    else if (_c2)             setConta2(code, false);
                }
                saveData();
                if (searchQuery) {
                    renderSearchResults();
                } else {
                    renderContent();
                    renderTabs();
                }
                updateStats();
            });

            return el;
        }

        // ============ STATS ============
        function getGroupStats(groupName) {
            const group = GROUPS[groupName];
            if (groupName === 'Insights' || groupName === 'Equipas' || groupName === 'Trocas') {
                return { owned: 0, total: 0 };
            }
            if (groupName === 'Especiais') {
                const total = SPECIAL_CROMOS.length;
                const owned = SPECIAL_CROMOS.filter(c => hasAny(c)).length;
                return { owned, total };
            }
            if (groupName === '#ALLTHEFEELS') {
                const total = ALLTHEFEELS_CROMOS.length;
                const owned = ALLTHEFEELS_CROMOS.filter(c => hasAny(c)).length;
                return { owned, total };
            }
            let owned = 0, total = 0;
            group.teams.forEach(team => {
                CROMO_NUMBERS.forEach(n => {
                    total++;
                    if (hasAny(`${team.code}${n}`)) owned++;
                });
            });
            return { owned, total };
        }

        function updateStats() {
            let total = 0, c1 = 0, c2 = 0, dups = 0;

            SPECIAL_CROMOS.forEach(code => {
                total++;
                if (hasCromo(code)) c1++;
                if (hasConta2(code)) c2++;
                dups += getDups(code);
            });

            ALLTHEFEELS_CROMOS.forEach(code => {
                total++;
                if (hasCromo(code)) c1++;
                if (hasConta2(code)) c2++;
                dups += getDups(code);
            });

            Object.values(GROUPS).forEach(group => {
                group.teams.forEach(team => {
                    CROMO_NUMBERS.forEach(n => {
                        total++;
                        const code = `${team.code}${n}`;
                        if (hasCromo(code)) c1++;
                        if (hasConta2(code)) c2++;
                        dups += getDups(code);
                    });
                });
            });

            const owned = new Set([...data.tenho, ...data.conta2]).size;
            const percent = total > 0 ? Math.round((owned / total) * 100) : 0;
            document.getElementById('progressPercent').textContent = percent + '%';
            document.getElementById('progressFill').style.width = percent + '%';
            document.getElementById('conta1Count').textContent = c1;
            document.getElementById('conta2Count').textContent = c2;
            document.getElementById('missingCount').textContent = total - owned;
            document.getElementById('duplicateCount').textContent = dups;
            document.getElementById('totalCount').textContent = total;
        }

        function showToast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2200);
        }

        // ============ EQUIPAS ============
        let equipasFilter = { status: 'todos', grupo: 'todos', sort: 'az' };

        function setEquipasFilter(key, value) {
            equipasFilter[key] = value;
            requestAnimationFrame(() => {
                const panel = document.querySelector('[data-panel="Equipas"]');
                if (panel) {
                    panel.innerHTML = `<div class="panel-header"><div class="panel-title">Equipas</div></div>`;
                    panel.appendChild(renderEquipasPanel());
                }
            });
        }

        function renderEquipasPanel() {
            const wrap = document.createElement('div');

            // Filtrar e recolher equipas
            let teams = [];
            Object.entries(GROUPS).forEach(([groupName, group]) => {
                if (groupName === 'Insights' || groupName === 'Especiais' || groupName === '#ALLTHEFEELS' || groupName === 'Equipas' || groupName === 'Trocas') return;
                if (equipasFilter.grupo !== 'todos' && groupName !== equipasFilter.grupo) return;
                group.teams.forEach((team, teamIdx) => {
                    const matchingNums = CROMO_NUMBERS.filter(n => {
                        const code = `${team.code}${n}`;
                        if (equipasFilter.status === 'tenho') return hasAny(code);
                        if (equipasFilter.status === 'faltam') return !hasAny(code);
                        if (equipasFilter.status === 'duplicados') return getDups(code) > 0;
                        return true;
                    });
                    if (matchingNums.length > 0) {
                        const owned = CROMO_NUMBERS.filter(n => hasAny(`${team.code}${n}`)).length;
                        teams.push({ team, groupName, matchingNums, owned, teamIdx });
                    }
                });
            });

            // Ordenar
            const groupOrder = Object.keys(GROUPS).filter(g => g !== 'Insights' && g !== 'Especiais' && g !== '#ALLTHEFEELS' && g !== 'Equipas' && g !== 'Trocas');
            teams.sort((a, b) => {
                if (equipasFilter.sort === 'az') return a.team.name.localeCompare(b.team.name, 'pt');
                if (equipasFilter.sort === 'za') return b.team.name.localeCompare(a.team.name, 'pt');
                if (equipasFilter.sort === 'pct-desc') return b.owned - a.owned;
                if (equipasFilter.sort === 'pct-asc') return a.owned - b.owned;
                if (equipasFilter.sort === 'grupo') {
                    const gi = groupOrder.indexOf(a.groupName) - groupOrder.indexOf(b.groupName);
                    return gi !== 0 ? gi : a.teamIdx - b.teamIdx;
                }
                return 0;
            });

            // Filtros UI
            const grupos = Object.keys(GROUPS).filter(g => g !== 'Insights' && g !== 'Especiais' && g !== '#ALLTHEFEELS' && g !== 'Equipas' && g !== 'Trocas');
            const filters = document.createElement('div');
            filters.className = 'filter-row';
            filters.innerHTML = `
                <div class="filter-group">
                    <div class="filter-label">Estado</div>
                    <div class="filter-pills">
                        ${[['todos','Todos'],['tenho','Tenho'],['faltam','Faltam'],['duplicados','Duplicados']].map(([v, l]) => `
                            <button type="button" class="filter-pill ${equipasFilter.status === v ? 'active' : ''}" onclick="setEquipasFilter('status','${v}')">${l}</button>
                        `).join('')}
                    </div>
                </div>
                <div class="filter-group">
                    <div class="filter-label">Grupo</div>
                    <select class="filter-select" onchange="setEquipasFilter('grupo', this.value)">
                        <option value="todos" ${equipasFilter.grupo === 'todos' ? 'selected' : ''}>Todos</option>
                        ${grupos.map(g => `<option value="${g}" ${equipasFilter.grupo === g ? 'selected' : ''}>${g}</option>`).join('')}
                    </select>
                </div>
                <div class="filter-group">
                    <div class="filter-label">Ordenar</div>
                    <select class="filter-select" onchange="setEquipasFilter('sort', this.value)">
                        <option value="az" ${equipasFilter.sort === 'az' ? 'selected' : ''}>A → Z</option>
                        <option value="za" ${equipasFilter.sort === 'za' ? 'selected' : ''}>Z → A</option>
                        <option value="grupo" ${equipasFilter.sort === 'grupo' ? 'selected' : ''}>Por grupo</option>
                        <option value="pct-desc" ${equipasFilter.sort === 'pct-desc' ? 'selected' : ''}>Mais completo</option>
                        <option value="pct-asc" ${equipasFilter.sort === 'pct-asc' ? 'selected' : ''}>Menos completo</option>
                    </select>
                </div>
            `;
            wrap.appendChild(filters);

            if (teams.length === 0) {
                const empty = document.createElement('div');
                empty.className = 'equipas-empty';
                empty.textContent = 'Nenhuma equipa encontrada com estes filtros.';
                wrap.appendChild(empty);
                return wrap;
            }

            teams.forEach(({ team, groupName, matchingNums, owned }) => {
                const section = document.createElement('div');
                section.className = 'team';
                const countLabel = equipasFilter.status !== 'todos'
                    ? ` · ${matchingNums.length} ${equipasFilter.status === 'tenho' ? 'tenho' : equipasFilter.status === 'faltam' ? 'faltam' : 'duplicados'}`
                    : '';
                section.innerHTML = `
                    <div class="team-header">
                        <div class="team-name">
                            <span class="team-flag">${team.flag}</span>
                            <span class="team-code">${team.code}</span>
                            <span>${team.name}</span>
                            <span class="search-group-tag">${groupName}</span>
                        </div>
                        <div class="team-progress">${owned}/12${countLabel}</div>
                    </div>
                `;
                const grid = document.createElement('div');
                grid.className = 'cromos-grid';
                matchingNums.forEach(num => grid.appendChild(createCromo('equipas', team.code, num)));
                section.appendChild(grid);
                wrap.appendChild(section);
            });

            return wrap;
        }

        // ============ TROCAS (TRADES) ============
        let trocasFilter = { giveGrupo: 'todos', receiveGrupo: 'todos', sort: 'az', giveSearch: '', receiveSearch: '' };
        let trocasMobileSide = 'give'; // lado visível no telemóvel: 'give' ou 'receive'

        function setTrocasSide(side) {
            trocasMobileSide = side;
            refreshTrocasPanel();
        }

        // Faz scroll suave para o topo do separador Trocas (usado após guardar/limpar).
        function scrollTrocasTop() {
            const panel = document.querySelector('[data-panel="Trocas"]');
            if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function setTrocasFilter(key, value) {
            trocasFilter[key] = value;
            requestAnimationFrame(() => {
                const panel = document.querySelector('[data-panel="Trocas"]');
                if (panel) {
                    panel.innerHTML = `<div class="panel-header"><div class="panel-title">🔄 Trocas</div></div>`;
                    panel.appendChild(renderTrocasPanel());
                }
            });
        }

        function setTrocasSearch(key, value) {
            trocasFilter[key] = value;
            // Apenas atualiza os cards, sem tocar nos inputs
            const side = key === 'giveSearch' ? 'give' : 'receive';
            updateTrocasGrid(side);
        }

        function updateTrocasGrid(side) {
            const wrapId = `trocas-${side}-grid-wrap`;
            const wrap = document.getElementById(wrapId);
            if (!wrap) return;
            wrap.innerHTML = '';

            const grupos = Object.keys(GROUPS).filter(g => g !== 'Insights' && g !== 'Especiais' && g !== '#ALLTHEFEELS' && g !== 'Equipas' && g !== 'Trocas');

            function sortItems(items) {
                return [...items].sort((a, b) => {
                    if (trocasFilter.sort === 'az')   return a.teamName.localeCompare(b.teamName, 'pt');
                    if (trocasFilter.sort === 'za')   return b.teamName.localeCompare(a.teamName, 'pt');
                    if (trocasFilter.sort === 'num')  return parseInt(a.num) - parseInt(b.num);
                    if (trocasFilter.sort === 'dups') return getDups(b.code) - getDups(a.code);
                    if (trocasFilter.sort === 'grupo') {
                        const gi = grupos.indexOf(a.groupName) - grupos.indexOf(b.groupName);
                        return gi !== 0 ? gi : a.teamName.localeCompare(b.teamName, 'pt');
                    }
                    return 0;
                });
            }

            function applySearchLocal(items, query) {
                if (!query) return items;
                const q = normalize(query);
                return items.filter(i =>
                    normalize(i.teamName).includes(q) ||
                    normalize(i.playerName || '').includes(q) ||
                    normalize(i.code).includes(q) ||
                    normalize(i.groupName || '').includes(q)
                );
            }

            if (side === 'give') {
                const availableToGive = getTrocasIndex();
                const availableToGiveWithGroup = availableToGive.map(item => {
                    let groupName = 'Especiais';
                    Object.entries(GROUPS).forEach(([gn, g]) => {
                        g.teams.forEach(t => { if (t.code === item.teamCode) groupName = gn; });
                    });
                    return { ...item, groupName };
                });

                let items = availableToGiveWithGroup;
                if (trocasFilter.giveGrupo === '__selected__') {
                    items = items.filter(i => data.trades.pending.given.includes(i.code));
                } else if (trocasFilter.giveGrupo !== 'todos') {
                    items = items.filter(i => i.groupName === trocasFilter.giveGrupo);
                }
                items = applySearchLocal(items, trocasFilter.giveSearch);
                items = sortItems(items);

                if (items.length === 0) {
                    wrap.innerHTML = `<div class="trades-empty">Nenhum cromo encontrado.</div>`;
                } else {
                    const grid = document.createElement('div');
                    grid.className = 'trades-grid';
                    items.forEach(item => {
                        const isSelected = data.trades.pending.given.includes(item.code);
                        grid.appendChild(makeTrocaCard(item, isSelected, 'selected-given', () => {
                            if (isSelected) data.trades.pending.given = data.trades.pending.given.filter(c => c !== item.code);
                            else data.trades.pending.given.push(item.code);
                            saveData();
                            refreshTrocasPanel();
                        }));
                    });
                    wrap.appendChild(grid);
                }
            } else {
                const receivableIndex = buildReceivableIndex();
                let items = receivableIndex;
                if (trocasFilter.receiveGrupo === '__selected__') {
                    items = items.filter(i => data.trades.pending.received.includes(i.code));
                } else if (trocasFilter.receiveGrupo !== 'todos') {
                    items = items.filter(i => i.groupName === trocasFilter.receiveGrupo);
                }
                items = applySearchLocal(items, trocasFilter.receiveSearch);
                items = sortItems(items);

                if (items.length === 0) {
                    wrap.innerHTML = `<div class="trades-empty">Nenhum cromo encontrado.</div>`;
                } else {
                    const grid = document.createElement('div');
                    grid.className = 'trades-grid';
                    items.forEach(item => {
                        const isSelected = data.trades.pending.received.includes(item.code);
                        grid.appendChild(makeTrocaCard(item, isSelected, 'selected-received', () => {
                            if (isSelected) data.trades.pending.received = data.trades.pending.received.filter(c => c !== item.code);
                            else data.trades.pending.received.push(item.code);
                            saveData();
                            refreshTrocasPanel();
                        }));
                    });
                    wrap.appendChild(grid);
                }
            }
        }

        function getCromoInfo(code) {
            if (SPECIAL_CROMOS.includes(code)) {
                return { teamCode: 'FIFA', teamName: 'Especiais FIFA', teamFlag: '⭐', num: code, playerName: players.especiais?.[code] || '' };
            }
            if (ALLTHEFEELS_CROMOS.includes(code)) {
                return { teamCode: 'FEELS', teamName: '#ALLTHEFEELS', teamFlag: '❤️', num: code, playerName: players.allthefeels?.[code] || '' };
            }
            let result = null;
            Object.entries(GROUPS).forEach(([gn, g]) => {
                if (gn === 'Insights' || gn === 'Especiais' || gn === '#ALLTHEFEELS' || gn === 'Equipas' || gn === 'Trocas') return;
                g.teams.forEach(team => {
                    CROMO_NUMBERS.forEach(n => {
                        if (`${team.code}${n}` === code) {
                            result = { teamCode: team.code, teamName: team.name, teamFlag: team.flag, num: n, playerName: players.equipas?.[team.code]?.[n] || '' };
                        }
                    });
                });
            });
            return result;
        }

        function cromoTip(code) {
            const info = getCromoInfo(code);
            if (!info) return code;
            const parts = [`${info.teamFlag} ${info.teamName}`, `Nº ${info.num}`];
            if (info.playerName) parts.push(info.playerName);
            return parts.join(' · ').replace(/"/g, '&quot;');
        }

        function buildReceivableIndex() {
            const receivableIndex = [];
            SPECIAL_CROMOS.forEach(code => {
                if (!hasAny(code)) {
                    const playerName = players.especiais ? (players.especiais[code] || '') : '';
                    receivableIndex.push({ code, type: 'especiais', teamCode: null, num: code, teamName: 'Especiais FIFA', teamFlag: '⭐', playerName, groupName: 'Especiais' });
                }
            });
            Object.entries(GROUPS).forEach(([groupName, group]) => {
                if (groupName === 'Insights' || groupName === 'Especiais' || groupName === '#ALLTHEFEELS' || groupName === 'Equipas' || groupName === 'Trocas') return;
                group.teams.forEach(team => {
                    CROMO_NUMBERS.forEach(n => {
                        const code = `${team.code}${n}`;
                        if (!hasAny(code)) {
                            const playerName = players.equipas && players.equipas[team.code] ? (players.equipas[team.code][n] || '') : '';
                            receivableIndex.push({ code, type: 'equipas', teamCode: team.code, num: n, teamName: team.name, teamFlag: team.flag, playerName, groupName });
                        }
                    });
                });
            });
            return receivableIndex;
        }

        function makeTrocaCard(item, isSelected, colorClass, onToggle) {
            const card = document.createElement('div');
            card.className = 'trade-item' + (isSelected ? ` ${colorClass}` : '');
            const dups = getDups(item.code);
            const contaBadge = item.conta ? `<div class="trade-conta-badge" style="background:${item.conta===2?'var(--conta2)':'var(--success)'}">C${item.conta}</div>` : '';
            card.innerHTML = `
                ${contaBadge}
                ${dups > 0 ? `<div class="trade-dup-badge">×${dups}</div>` : ''}
                ${isSelected ? '<div class="trade-sel-mark">✓</div>' : ''}
                <div class="trade-item-flag">${item.teamFlag}</div>
                <div class="trade-item-team">${item.teamName}</div>
                <div class="trade-item-code">${item.num}</div>
                ${item.playerName ? `<div class="trade-item-player">${item.playerName}</div>` : ''}
            `;
            card.onclick = onToggle;
            return card;
        }

        function refreshTrocasPanel() {
            const panel = document.querySelector('[data-panel="Trocas"]');
            if (panel) {
                panel.innerHTML = `<div class="panel-header"><div class="panel-title">🔄 Trocas</div></div>`;
                panel.appendChild(renderTrocasPanel());
            }
        }

        function getTrocasIndex() {
            const trocasIndex = [];

            // Stickers available to give (duplicates from Conta 1 OR Conta 2)
            Object.keys(data.duplicados).forEach(code => {
                if (data.duplicados[code] > 0 && hasAny(code)) {
                    // Find team and number
                    SPECIAL_CROMOS.forEach(special => {
                        if (special === code) {
                            const playerName = players.especiais ? (players.especiais[code] || '') : '';
                            trocasIndex.push({
                                code,
                                type: 'especiais',
                                teamCode: null,
                                num: code,
                                teamName: 'Especiais FIFA',
                                teamFlag: '⭐',
                                playerName,
                                conta: hasConta2(code) ? 2 : 1,
                                available: true
                            });
                        }
                    });
                    Object.entries(GROUPS).forEach(([groupName, group]) => {
                        if (groupName === 'Insights' || groupName === 'Especiais' || groupName === '#ALLTHEFEELS' || groupName === 'Equipas' || groupName === 'Trocas') return;
                        group.teams.forEach(team => {
                            CROMO_NUMBERS.forEach(n => {
                                if (`${team.code}${n}` === code) {
                                    const playerName = players.equipas && players.equipas[team.code]
                                        ? (players.equipas[team.code][n] || '') : '';
                                    trocasIndex.push({
                                        code,
                                        type: 'equipas',
                                        teamCode: team.code,
                                        num: n,
                                        teamName: team.name,
                                        teamFlag: team.flag,
                                        playerName,
                                        conta: hasConta2(code) ? 2 : 1,
                                        available: true
                                    });
                                }
                            });
                        });
                    });
                }
            });

            return trocasIndex;
        }

        function renderTrocasPanel() {
            const wrap = document.createElement('div');
            ensureDataIntegrity();

            // Auto-correção: se a vista "Só selecionados" ficou sem itens (ex: após
            // guardar ou limpar a troca), o botão para a desativar deixa de existir.
            // Repõe o filtro para "todos" para não ficar preso numa grelha vazia.
            if (trocasFilter.giveGrupo === '__selected__' && data.trades.pending.given.length === 0) {
                trocasFilter.giveGrupo = 'todos';
            }
            if (trocasFilter.receiveGrupo === '__selected__' && data.trades.pending.received.length === 0) {
                trocasFilter.receiveGrupo = 'todos';
            }

            const container = document.createElement('div');
            const selectionDiv = document.createElement('div');
            selectionDiv.className = `trades-container show-${trocasMobileSide}`;

            const grupos = Object.keys(GROUPS).filter(g => g !== 'Insights' && g !== 'Especiais' && g !== '#ALLTHEFEELS' && g !== 'Equipas' && g !== 'Trocas');
            const selectedGiveCount = data.trades.pending.given.length;
            const selectedReceiveCount = data.trades.pending.received.length;
            const hasAnyDups = getTrocasIndex().length > 0;

            // Left section
            const leftSection = document.createElement('div');
            leftSection.className = 'trades-section give';
            leftSection.innerHTML = `
                <div class="trades-section-title">
                    ↑ Disponível para dar
                    ${selectedGiveCount > 0 ? `<span class="trades-section-badge">${selectedGiveCount}</span>` : ''}
                </div>
                <input id="trocas-give-search" type="text" class="search-input" placeholder="Pesquisar equipa ou jogador..." value="${trocasFilter.giveSearch}" oninput="setTrocasSearch('giveSearch',this.value)" autocomplete="off" autocorrect="off" spellcheck="false" style="margin-bottom:10px;padding:8px 12px;font-size:13px">
                <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
                    <select class="filter-select" onchange="setTrocasFilter('giveGrupo',this.value)" style="font-size:12px;padding:5px 10px">
                        <option value="todos" ${trocasFilter.giveGrupo==='todos'?'selected':''}>Todos os grupos</option>
                        ${grupos.map(g=>`<option value="${g}" ${trocasFilter.giveGrupo===g?'selected':''}>${g}</option>`).join('')}
                    </select>
                    <select class="filter-select" onchange="setTrocasFilter('sort',this.value)" style="font-size:12px;padding:5px 10px">
                        <option value="az"    ${trocasFilter.sort==='az'   ?'selected':''}>A → Z</option>
                        <option value="za"    ${trocasFilter.sort==='za'   ?'selected':''}>Z → A</option>
                        <option value="grupo" ${trocasFilter.sort==='grupo'?'selected':''}>Por grupo</option>
                        <option value="num"   ${trocasFilter.sort==='num'  ?'selected':''}>Por nº</option>
                        <option value="dups"  ${trocasFilter.sort==='dups' ?'selected':''}>Mais duplicados</option>
                    </select>
                    ${selectedGiveCount > 0 ? `<button class="filter-pill ${trocasFilter.giveGrupo==='__selected__'?'active':''}" onclick="setTrocasFilter('giveGrupo','${trocasFilter.giveGrupo==='__selected__'?'todos':'__selected__'}')" style="font-size:11px;padding:4px 10px">Só selecionados</button>` : ''}
                </div>
                <div id="trocas-give-grid-wrap">${hasAnyDups ? '' : '<div class="trades-empty">Não tens duplicados para dar</div>'}</div>
            `;

            // Right section
            const rightSection = document.createElement('div');
            rightSection.className = 'trades-section receive';
            rightSection.innerHTML = `
                <div class="trades-section-title">
                    ↓ Para receber
                    ${selectedReceiveCount > 0 ? `<span class="trades-section-badge">${selectedReceiveCount}</span>` : ''}
                </div>
                <input id="trocas-receive-search" type="text" class="search-input" placeholder="Pesquisar equipa ou jogador..." value="${trocasFilter.receiveSearch}" oninput="setTrocasSearch('receiveSearch',this.value)" autocomplete="off" autocorrect="off" spellcheck="false" style="margin-bottom:10px;padding:8px 12px;font-size:13px">
                <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
                    <select class="filter-select" onchange="setTrocasFilter('receiveGrupo',this.value)" style="font-size:12px;padding:5px 10px">
                        <option value="todos" ${trocasFilter.receiveGrupo==='todos'?'selected':''}>Todos os grupos</option>
                        ${grupos.map(g=>`<option value="${g}" ${trocasFilter.receiveGrupo===g?'selected':''}>${g}</option>`).join('')}
                    </select>
                    <select class="filter-select" onchange="setTrocasFilter('sort',this.value)" style="font-size:12px;padding:5px 10px">
                        <option value="az"    ${trocasFilter.sort==='az'   ?'selected':''}>A → Z</option>
                        <option value="za"    ${trocasFilter.sort==='za'   ?'selected':''}>Z → A</option>
                        <option value="grupo" ${trocasFilter.sort==='grupo'?'selected':''}>Por grupo</option>
                        <option value="num"   ${trocasFilter.sort==='num'  ?'selected':''}>Por nº</option>
                    </select>
                    ${selectedReceiveCount > 0 ? `<button class="filter-pill ${trocasFilter.receiveGrupo==='__selected__'?'active':''}" onclick="setTrocasFilter('receiveGrupo','${trocasFilter.receiveGrupo==='__selected__'?'todos':'__selected__'}')" style="font-size:11px;padding:4px 10px;${trocasFilter.receiveGrupo==='__selected__'?'':'background:var(--bg);color:var(--text-muted);border-color:var(--border)'}">Só selecionados</button>` : ''}
                </div>
                <div id="trocas-receive-grid-wrap"></div>
            `;

            selectionDiv.appendChild(leftSection);
            selectionDiv.appendChild(rightSection);

            // Copy buttons row
            const copyDiv = document.createElement('div');
            copyDiv.style.cssText = 'display:flex;gap:8px;margin-bottom:12px;justify-content:flex-end';

            function doCopy(text, label) {
                if (!text) return;
                navigator.clipboard.writeText(text).then(() => {
                    showToast(`📋 ${label} copiado!`);
                }).catch(() => {
                    const ta = document.createElement('textarea');
                    ta.value = text;
                    ta.style.cssText = 'position:fixed;opacity:0';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    showToast(`📋 ${label} copiado!`);
                });
            }

            function buildDupString() {
                const parts = [];
                Object.keys(data.duplicados).sort().forEach(code => {
                    const n = data.duplicados[code];
                    if (n < 1 || !hasAny(code)) return;
                    let teamCode = null, num = null, playerName = '';
                    SPECIAL_CROMOS.forEach(s => {
                        if (s === code) { teamCode = 'FIFA'; num = code; playerName = players.especiais?.[code] || code; }
                    });
                    if (!teamCode) {
                        Object.entries(GROUPS).forEach(([gn, g]) => {
                            if (gn === 'Insights' || gn === 'Especiais' || gn === '#ALLTHEFEELS' || gn === 'Equipas' || gn === 'Trocas') return;
                            g.teams.forEach(team => {
                                CROMO_NUMBERS.forEach(nr => {
                                    if (`${team.code}${nr}` === code) { teamCode = team.code; num = nr; playerName = players.equipas?.[team.code]?.[nr] || ''; }
                                });
                            });
                        });
                    }
                    if (!teamCode) return;
                    const label = playerName ? `${teamCode} ${playerName}` : `${teamCode}${num}`;
                    for (let i = 0; i < n; i++) parts.push(label);
                });
                return parts.join(' | ');
            }

            function buildMissingString() {
                return buildReceivableIndex()
                    .map(item => item.playerName ? `${item.teamCode || 'FIFA'} ${item.playerName}` : `${item.teamCode || 'FIFA'}${item.num}`)
                    .join(' | ');
            }

            const totalDups = Object.values(data.duplicados).filter(n => n > 0).length;
            const totalMissing = buildReceivableIndex().length;

            const svgUpload = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;
            const svgDownload = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

            const copyDupsBtn = document.createElement('button');
            copyDupsBtn.className = 'btn-icon-copy copy-give';
            copyDupsBtn.title = `Copiar duplicados (${totalDups})`;
            copyDupsBtn.disabled = totalDups === 0;
            copyDupsBtn.innerHTML = `${svgUpload}<span>×${totalDups}</span>`;
            copyDupsBtn.onclick = () => doCopy(buildDupString(), 'Duplicados');

            const copyMissingBtn = document.createElement('button');
            copyMissingBtn.className = 'btn-icon-copy copy-receive';
            copyMissingBtn.title = `Copiar em falta (${totalMissing})`;
            copyMissingBtn.innerHTML = `${svgDownload}<span>${totalMissing}</span>`;
            copyMissingBtn.onclick = () => doCopy(buildMissingString(), 'Em falta');

            copyDiv.appendChild(copyDupsBtn);
            copyDiv.appendChild(copyMissingBtn);
            container.appendChild(copyDiv);

            // Toggle Dar / Receber (apenas visível no telemóvel via CSS)
            const sideToggle = document.createElement('div');
            sideToggle.className = 'trades-side-toggle';
            sideToggle.innerHTML = `
                <button class="trades-side-btn give ${trocasMobileSide==='give'?'active':''}" onclick="setTrocasSide('give')">
                    ↑ Dar${selectedGiveCount>0?` <span class="trades-side-count">${selectedGiveCount}</span>`:''}
                </button>
                <button class="trades-side-btn receive ${trocasMobileSide==='receive'?'active':''}" onclick="setTrocasSide('receive')">
                    ↓ Receber${selectedReceiveCount>0?` <span class="trades-side-count">${selectedReceiveCount}</span>`:''}
                </button>
            `;
            container.appendChild(sideToggle);

            container.appendChild(selectionDiv);

            // Populate grids after DOM is ready
            requestAnimationFrame(() => {
                if (hasAnyDups) updateTrocasGrid('give');
                updateTrocasGrid('receive');
            });

            // Action bar
            const hasSelection = selectedGiveCount > 0 || selectedReceiveCount > 0;
            const actionBar = document.createElement('div');
            actionBar.className = 'trades-action-bar' + (hasSelection ? ' trades-action-bar--floating' : '');
            actionBar.id = 'trades-action-bar';
            if (hasSelection) container.classList.add('has-floating-bar');

            if (!hasSelection) {
                actionBar.innerHTML = `<span style="color:var(--text-muted);font-size:13px;flex:1">Seleciona cromos nas colunas para criar uma troca.</span>`;
            } else {
                const summaryDiv = document.createElement('div');
                summaryDiv.className = 'trades-action-summary';
                summaryDiv.innerHTML = `
                    <span class="trades-action-pill give">↑ ${selectedGiveCount} a dar</span>
                    <span class="trades-action-arrow">→</span>
                    <span class="trades-action-pill receive">↓ ${selectedReceiveCount} a receber</span>
                `;
                actionBar.appendChild(summaryDiv);

                const saveBtn = document.createElement('button');
                saveBtn.className = 'btn-primary';
                saveBtn.style.cssText = 'font-size:13px;padding:8px 16px;white-space:nowrap';
                saveBtn.textContent = 'Guardar troca';
                saveBtn.onclick = () => {
                    // Show inline name form
                    actionBar.innerHTML = '';
                    const form = document.createElement('div');
                    form.className = 'trades-save-form';
                    const input = document.createElement('input');
                    input.className = 'trades-save-input';
                    input.placeholder = 'Nome da troca (ex: Troca com o António)';
                    input.maxLength = 60;
                    const confirmBtn = document.createElement('button');
                    confirmBtn.className = 'btn-success';
                    confirmBtn.style.cssText = 'font-size:13px;padding:8px 14px;white-space:nowrap';
                    confirmBtn.textContent = '✓ Guardar';
                    const cancelBtn = document.createElement('button');
                    cancelBtn.className = 'btn-secondary';
                    cancelBtn.style.cssText = 'font-size:13px;padding:8px 12px';
                    cancelBtn.textContent = 'Cancelar';

                    const doSave = () => {
                        const name = input.value.trim() || `Troca ${new Date().toLocaleDateString('pt-PT')}`;
                        data.trades.saved.push({
                            id: Date.now().toString(),
                            name,
                            date: new Date().toISOString(),
                            given: [...data.trades.pending.given],
                            received: [...data.trades.pending.received]
                        });
                        data.trades.pending = { given: [], received: [] };
                        saveData();
                        showToast('✓ Troca guardada!');
                        refreshTrocasPanel();
                        scrollTrocasTop();
                    };

                    confirmBtn.onclick = doSave;
                    input.onkeydown = e => { if (e.key === 'Enter') doSave(); if (e.key === 'Escape') refreshTrocasPanel(); };
                    cancelBtn.onclick = refreshTrocasPanel;

                    form.appendChild(input);
                    form.appendChild(confirmBtn);
                    form.appendChild(cancelBtn);
                    actionBar.appendChild(form);
                    input.focus();
                };

                const clearBtn = document.createElement('button');
                clearBtn.className = 'btn-secondary';
                clearBtn.style.cssText = 'font-size:13px;padding:8px 12px';
                clearBtn.textContent = 'Limpar';
                clearBtn.onclick = () => {
                    data.trades.pending = { given: [], received: [] };
                    saveData();
                    refreshTrocasPanel();
                    scrollTrocasTop();
                };

                actionBar.appendChild(saveBtn);
                actionBar.appendChild(clearBtn);
            }

            container.appendChild(actionBar);

            // Saved trades
            if (data.trades.saved.length > 0) {
                const savedSection = document.createElement('div');
                savedSection.className = 'trades-saved-section';
                savedSection.innerHTML = `<div class="trades-saved-title">⏳ Trocas guardadas <span class="trades-section-badge" style="background:#f59e0b;color:white">${data.trades.saved.length}</span></div>`;

                data.trades.saved.slice().reverse().forEach(trade => {
                    const card = document.createElement('div');
                    card.className = 'trades-saved-card';

                    const date = new Date(trade.date);
                    const dateStr = date.toLocaleDateString('pt-PT') + ' ' + date.toLocaleTimeString('pt-PT', {hour:'2-digit', minute:'2-digit'});

                    const giveChips = trade.given.map(c => `<span class="chip-give" data-tip="${cromoTip(c)}">↑ ${c}</span>`).join('');
                    const receiveChips = trade.received.map(c => `<span class="chip-receive" data-tip="${cromoTip(c)}">↓ ${c}</span>`).join('');

                    const body = document.createElement('div');
                    body.className = 'trades-saved-card-body';
                    body.innerHTML = `
                        <div class="trades-saved-card-name">${trade.name}</div>
                        <div class="trades-saved-card-meta">${dateStr} · ${trade.given.length} a dar · ${trade.received.length} a receber</div>
                        <div class="trades-saved-card-chips">${giveChips}${receiveChips}</div>
                    `;

                    const actions = document.createElement('div');
                    actions.className = 'trades-saved-card-actions';

                    const completeBtn = document.createElement('button');
                    completeBtn.className = 'btn-success';
                    completeBtn.style.cssText = 'font-size:12px;padding:7px 12px;white-space:nowrap';
                    completeBtn.textContent = '✓ Concluir';
                    completeBtn.onclick = () => {
                        trade.given.forEach(code => {
                            const d = getDups(code);
                            setDups(code, Math.max(0, d - 1));
                        });
                        trade.received.forEach(code => setConta2(code, true));
                        data.trades.history.push({
                            id: trade.id,
                            name: trade.name,
                            date: trade.date,
                            completedDate: new Date().toISOString(),
                            given: trade.given,
                            received: trade.received
                        });
                        data.trades.saved = data.trades.saved.filter(t => t.id !== trade.id);
                        saveData();
                        showToast('✓ Troca concluída!');
                        refreshTrocasPanel();
                        renderContent();
                        renderTabs();
                        updateStats();
                    };

                    const cancelBtn = document.createElement('button');
                    cancelBtn.className = 'btn-danger';
                    cancelBtn.style.cssText = 'font-size:12px;padding:7px 10px';
                    cancelBtn.textContent = '✕';
                    cancelBtn.title = 'Cancelar troca';
                    cancelBtn.onclick = () => {
                        data.trades.saved = data.trades.saved.filter(t => t.id !== trade.id);
                        saveData();
                        refreshTrocasPanel();
                    };

                    actions.appendChild(completeBtn);
                    actions.appendChild(cancelBtn);
                    card.appendChild(body);
                    card.appendChild(actions);
                    savedSection.appendChild(card);
                });

                container.appendChild(savedSection);
            }

            // History
            if (data.trades.history.length > 0) {
                const historyDiv = document.createElement('div');
                historyDiv.className = 'trade-history';
                historyDiv.innerHTML = `<div class="trade-history-title">✓ Histórico</div>`;

                data.trades.history.slice().reverse().forEach(trade => {
                    const record = document.createElement('div');
                    record.className = 'trade-record';

                    const date = new Date(trade.completedDate || trade.date);
                    const dateStr = date.toLocaleDateString('pt-PT') + ' ' + date.toLocaleTimeString('pt-PT', {hour:'2-digit', minute:'2-digit'});

                    const giveChips = trade.given.map(c => `<span class="chip-give" data-tip="${cromoTip(c)}">↑ ${c}</span>`).join('');
                    const receiveChips = trade.received.map(c => `<span class="chip-receive" data-tip="${cromoTip(c)}">↓ ${c}</span>`).join('');

                    record.innerHTML = `
                        <div class="trade-record-header">
                            <span class="trade-record-name">${trade.name || 'Troca'}</span>
                            <span class="trade-record-date">${dateStr}</span>
                        </div>
                        <div class="trade-record-chips">${giveChips}${receiveChips}</div>
                    `;
                    historyDiv.appendChild(record);
                });

                container.appendChild(historyDiv);
            }

            wrap.appendChild(container);
            return wrap;
        }

        // ============ SEARCH ============
        let searchQuery = '';

        function initSearch() {
            const input = document.getElementById('searchInput');
            const clearBtn = document.getElementById('searchClear');

            input.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                clearBtn.style.display = searchQuery ? '' : 'none';
                updateSearchUI();
            });

            clearBtn.addEventListener('click', () => {
                searchQuery = '';
                input.value = '';
                clearBtn.style.display = 'none';
                input.focus();
                updateSearchUI();
            });
        }

        function updateSearchUI() {
            const panel = document.getElementById('searchPanel');
            const content = document.getElementById('content');
            const tabs = document.getElementById('tabs');

            if (searchQuery) {
                panel.style.display = '';
                tabs.style.display = 'none';
                content.style.display = 'none';
                renderSearchResults();
            } else {
                panel.style.display = 'none';
                tabs.style.display = '';
                content.style.display = '';
            }
        }

        function normalize(str) {
            return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        }

        function buildSearchIndex() {
            const results = [];

            SPECIAL_CROMOS.forEach(code => {
                const playerName = players.especiais ? (players.especiais[code] || '') : '';
                results.push({
                    type: 'especiais',
                    code,
                    num: code,
                    teamCode: null,
                    teamName: 'Especiais FIFA',
                    teamFlag: '⭐',
                    groupName: 'Especiais',
                    playerName,
                    searchText: normalize(`${playerName} especiais fifa ${code}`)
                });
            });

            Object.entries(GROUPS).forEach(([groupName, group]) => {
                if (groupName === 'Insights' || groupName === 'Especiais' || groupName === '#ALLTHEFEELS' || groupName === 'Equipas' || groupName === 'Trocas') return;
                group.teams.forEach(team => {
                    CROMO_NUMBERS.forEach(num => {
                        const playerName = players.equipas && players.equipas[team.code]
                            ? (players.equipas[team.code][num] || '') : '';
                        results.push({
                            type: 'equipas',
                            code: `${team.code}${num}`,
                            num,
                            teamCode: team.code,
                            teamName: team.name,
                            teamFlag: team.flag,
                            groupName,
                            playerName,
                            searchText: normalize(`${playerName} ${team.name} ${team.code} ${groupName}`)
                        });
                    });
                });
            });

            return results;
        }

        function renderSearchResults() {
            const container = document.getElementById('searchResults');
            const query = normalize(searchQuery);
            const index = buildSearchIndex();
            const matches = index.filter(item => item.searchText.includes(query));

            container.innerHTML = '';

            const header = document.createElement('div');
            header.className = 'search-header';
            header.textContent = matches.length === 0
                ? `Nenhum resultado para "${searchQuery}"`
                : `${matches.length} resultado${matches.length !== 1 ? 's' : ''} para "${searchQuery}"`;
            container.appendChild(header);

            if (matches.length === 0) {
                const empty = document.createElement('div');
                empty.className = 'search-empty';
                empty.textContent = 'Tenta pesquisar pelo nome do jogador, código da equipa ou grupo.';
                container.appendChild(empty);
                return;
            }

            // Group results by team
            const grouped = new Map();
            matches.forEach(m => {
                const key = m.teamCode || '__especiais__';
                if (!grouped.has(key)) {
                    grouped.set(key, {
                        teamName: m.teamName,
                        teamFlag: m.teamFlag,
                        groupName: m.groupName,
                        type: m.type,
                        items: []
                    });
                }
                grouped.get(key).items.push(m);
            });

            grouped.forEach((group) => {
                const section = document.createElement('div');
                section.className = 'search-section';

                const label = document.createElement('div');
                label.className = 'search-section-label';
                label.innerHTML = `<span>${group.teamFlag}</span> <span>${group.teamName}</span> <span class="search-group-tag">${group.groupName}</span>`;
                section.appendChild(label);

                const grid = document.createElement('div');
                grid.className = 'cromos-grid';
                group.items.forEach(item => {
                    grid.appendChild(createCromo(item.type, item.teamCode, item.num));
                });
                section.appendChild(grid);
                container.appendChild(section);
            });
        }

        // ============ START (com autenticação) ============
        const appRoot = document.querySelector('.app');
        const authGate = document.getElementById('authGate');
        const loginBtn = document.getElementById('loginBtn');
        const authMsg = document.getElementById('authMsg');
        let appStarted = false;

        function showGate(message) {
            if (appRoot) appRoot.style.display = 'none';
            authGate.style.display = 'flex';
            authMsg.innerHTML = message || '';
        }

        function hideGate() {
            authGate.style.display = 'none';
            if (appRoot) appRoot.style.display = '';
        }

        // Traduz os códigos de erro mais comuns do Firebase para português.
        function mensagemErroAuth(code) {
            const mapa = {
                'auth/popup-blocked': 'O browser bloqueou a janela de login. Permite pop-ups e tenta novamente.',
                'auth/popup-closed-by-user': 'Login cancelado.',
                'auth/cancelled-popup-request': 'Login cancelado.',
                'auth/network-request-failed': 'Sem ligação à internet. Verifica a tua rede.',
                'auth/unauthorized-domain': 'Este domínio não está autorizado nas definições do Firebase.'
            };
            return mapa[code] || 'Não foi possível entrar. Tenta novamente.';
        }

        loginBtn.addEventListener('click', async () => {
            authMsg.textContent = '';
            const provider = new firebase.auth.GoogleAuthProvider();
            try {
                await auth.signInWithPopup(provider);
            } catch (e) {
                authMsg.textContent = mensagemErroAuth(e.code);
            }
        });

        // Botão de logout no cabeçalho
        document.getElementById('headerLogoutBtn')?.addEventListener('click', () => auth.signOut());

        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                appStarted = false;
                loginBtn.style.display = '';
                showGate('');
                return;
            }
            console.log('Sessão iniciada — UID:', user.uid, '·', user.email);
            const authorized = await loadData();
            if (!authorized) {
                loginBtn.style.display = 'none';
                showGate(
                    `A conta <strong>${user.email}</strong> não tem acesso a este álbum.` +
                    `<br><button id="logoutBtn" class="auth-btn">Sair</button>`
                );
                document.getElementById('logoutBtn')?.addEventListener('click', () => auth.signOut());
                return;
            }
            hideGate();
            if (!appStarted) {
                appStarted = true;
                await loadPlayers();
                renderTabs();
                renderContent();
                updateStats();
                initSearch();
            }
        });
