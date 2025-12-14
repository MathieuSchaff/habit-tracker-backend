# 💻 README.dev.md - Mode Développement

## 🎯 Principe

En dev, **tu n'as pas besoin de** :

- ❌ Nginx
- ❌ Certbot
- ❌ Rebuild Docker à chaque modification

## 🚀 Option 1 : Sans Docker (recommandé)

### Installation

```bash
bun install
```

### Configuration

Créer `.env` local :

```env
DATABASE_URL=postgres://app:password@localhost:5432/appdb
```

### Démarrer

```bash
# PostgreSQL en Docker (optionnel)
docker run -d \
  --name dev_postgres \
  -e POSTGRES_USER=app \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=appdb \
  -p 5432:5432 \
  postgres:16

# API avec hot reload
bun run dev
```

L'API est accessible sur **http://localhost:3000**

## 🐳 Option 2 : Avec Docker

### Lancer uniquement la DB

```bash
docker compose up -d db
```

### Démarrer l'API en local

```bash
bun run dev
```

### Variables d'environnement

```env
# .env local
DATABASE_URL=postgres://app:${POSTGRES_PASSWORD}@localhost:5432/appdb
```

⚠️ **Note** : En local, le host est `localhost`, pas `db`

## 🔥 Hot Reload

Le script `dev` utilise `bun --watch` :

- Rechargement automatique à chaque sauvegarde
- Pas besoin de redémarrer manuellement

## 🔍 Debug

### Logs API

Directement dans le terminal où tu as lancé `bun run dev`

### Logs DB (si Docker)

```bash
docker logs -f dev_postgres
# ou
docker logs -f app_db
```

### Tester l'API

```bash
curl http://localhost:3000/health
```

## 🧹 Nettoyage

```bash
# Arrêter la DB Docker
docker stop dev_postgres
docker rm dev_postgres

# Ou avec docker-compose
docker compose down
```

## 📝 Workflow typique

```bash
# 1. Démarrer la DB
docker compose up -d db

# 2. Coder avec hot reload
bun run dev

# 3. Tester
curl http://localhost:3000/health
```
