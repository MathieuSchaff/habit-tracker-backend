# 💻 README.dev.md - Développement

## 🎯 Principe

En dev, pas besoin de :

- ❌ Nginx
- ❌ Certbot
- ❌ Rebuild à chaque modification

---

## 🚀 Option 1 : API locale (recommandé)

### Installation

```bash
bun install
```

### Configuration

**1. Créer `.env.dev`** (pour Docker Compose)

```env
POSTGRES_PASSWORD=dev_password_123
```

**2. Créer `.env`** (pour Bun local)

```bash
cp .env.example .env
```

Contenu :

```env
DATABASE_URL=postgres://app:dev_password_123@localhost:5432/appdb
```

⚠️ Les mots de passe doivent correspondre.

### Démarrer

```bash
# 1. DB via Docker
bun run docker:dev:db

# 2. API en local (hot reload automatique)
bun run dev
```

API accessible sur **http://localhost:3000**

---

## 🐳 Option 2 : Tout avec Docker

```bash
bun run docker:dev
```

**Avantages** :

- ✅ Tout conteneurisé
- ✅ Hot reload fonctionne
- ✅ Proche de la prod

**Inconvénients** :

- ⚠️ Plus lent
- ⚠️ Plus de ressources

API accessible sur **http://localhost:3000**
DB accessible sur **localhost:5432**

---

## 🔥 Hot Reload

### Option 1

Géré par `bun --watch` directement.

### Option 2

Code monté en volume dans `docker-compose.dev.yml` :

```yaml
volumes:
  - ./src:/app/src:ro
```

---

## 🔍 Debug

### Logs API

**Option 1** : Dans le terminal où tu as lancé `bun run dev`

**Option 2** : `bun run docker:logs:api`

### Logs DB

```bash
docker compose logs -f db
```

### Tester

```bash
curl http://localhost:3000/health
```

### Accès DB

**CLI** :

```bash
docker compose exec db psql -U app -d appdb
```

**Client graphique** (DBeaver, pgAdmin) :

- Host: `localhost`
- Port: `5432`
- User: `app`
- Password: `dev_password_123`
- Database: `appdb`

---

## 🧹 Nettoyage

```bash
# Arrêter
bun run docker:stop

# Tout supprimer (⚠️ perte de données)
bun run docker:clean
```

---

## 📝 Workflow

### Option 1 (recommandé)

```bash
# 1. DB
bun run docker:dev:db

# 2. Vérifier
docker compose ps

# 3. API
bun run dev

# 4. Tester
curl http://localhost:3000/health
```

### Option 2

```bash
# 1. Tout démarrer
bun run docker:dev

# 2. Logs si besoin
bun run docker:logs:api

# 3. Arrêter
bun run docker:stop
```

---

## 🆚 Comparaison

| Critère    | Option 1     | Option 2    |
| ---------- | ------------ | ----------- |
| Vitesse    | ⚡ Rapide    | 🐌 Lent     |
| Hot reload | ✅ Natif     | ✅ Volume   |
| Ressources | 💚 Faible    | 🟡 Moyen    |
| Isolation  | ⚠️ Partielle | ✅ Complète |
| Simplicité | 🟡 Moyenne   | ✅ Simple   |

**Recommandation** :

- Dev quotidien → Option 1
- Tests pré-déploiement → Option 2

---

## 🔧 Variables

### `.env.dev` (pour Docker Compose)

```env
POSTGRES_PASSWORD=dev_password_123
```

### `.env` (pour Bun local)

```env
DATABASE_URL=postgres://app:dev_password_123@localhost:5432/appdb
```

### Différence importante

- **Docker** : host = `db`
- **Local** : host = `localhost`

---

## 🐛 Problèmes

### DB ne démarre pas

```bash
docker compose logs db
bun run docker:clean
bun run docker:dev:db
```

### Hot reload ne marche pas

Vérifier : `bun run docker:dev` (pas juste `docker compose up`)

### Connexion DB échoue (Option 1)

Vérifier `.env` :

```bash
cat .env
# Doit contenir: DATABASE_URL=postgres://app:dev_password_123@localhost:5432/appdb
```

### Port 3000 déjà utilisé

```bash
lsof -i :3000
```

### Mots de passe différents

Vérifier que le mot de passe est identique dans :

- `.env.dev` → `POSTGRES_PASSWORD=xxx`
- `.env` → `DATABASE_URL=postgres://app:xxx@...`

---

## 📚 Commandes

```bash
# Dev
bun run dev                 # API locale
bun run docker:dev:db       # DB uniquement
bun run docker:dev          # Tout avec Docker
bun run docker:dev:bg       # En arrière-plan

# Gestion
bun run docker:stop         # Arrêter
bun run docker:logs         # Tous les logs
bun run docker:logs:api     # Logs API
bun run docker:clean        # Tout supprimer

# DB
bun run db:generate         # Migrations
bun run db:migrate          # Appliquer migrations

# Build
bun run build               # Compiler
bun run start               # Lancer le build
bun run test                # Tests
```

---

## ✅ Checklist

### Première fois

- [ ] `bun install`
- [ ] Créer `.env.dev` avec `POSTGRES_PASSWORD`
- [ ] Créer `.env` depuis `.env.example`
- [ ] Vérifier que les mots de passe correspondent

### Chaque session

- [ ] DB démarrée (`bun run docker:dev:db`)
- [ ] API lancée (`bun run dev`)
- [ ] `/health` répond 200
- [ ] Hot reload fonctionne
