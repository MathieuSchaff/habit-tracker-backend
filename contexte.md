# Habit Tracker - Contexte Technique

## Stack

| Couche | Technologies |
|--------|--------------|
| **Backend** | Bun + Hono + TypeScript |
| **Frontend** | Vite + React + TypeScript |
| **Database** | PostgreSQL 16 + Drizzle ORM |
| **Infra** | Docker Compose (dev/prod/test) |
| **Reverse Proxy** | Nginx (prod uniquement) |
| **SSL** | Certbot / Let's Encrypt (prod) |

---

## Structure du projet

```
habit-tracker/
├── Makefile                 # Point d'entrée principal (make dev, make test, etc.)
├── docker-compose.yml       # Config de base commune
├── docker-compose.dev.yml   # Surcharges dev (ports exposés, hot reload, nginx désactivé)
├── docker-compose.prod.yml  # Surcharges prod (nginx, SSL, healthchecks)
├── docker-compose.test.yml  # DB isolée pour tests (port 5433, tmpfs)
├── .env.dev                 # Variables dev (POSTGRES_PASSWORD=devpassword)
├── .env.prod                # Variables prod (non commit, contient secrets)
├── nginx/conf.d/            # Config reverse proxy
│
├── backend/
│   ├── Dockerfile           # Multi-stage: base → deps → dev/prod
│   ├── drizzle.config.ts    # Config Drizzle (utilise process.env.DATABASE_URL)
│   ├── drizzle/             # Migrations SQL générées
│   └── src/
│       ├── index.ts         # Point d'entrée Hono
│       ├── db/
│       │   ├── index.ts     # Connexion Drizzle
│       │   └── schema/      # Schémas des tables
│       └── routes/          # Routes API
│
└── frontend/
    ├── Dockerfile           # Prod: build Vite → nginx
    ├── Dockerfile.dev       # Dev: serveur Vite avec HMR
    └── src/
```

---

## Commandes principales

```bash
# Développement
make dev              # Lance tout (API:3000, Frontend:5173, DB:5432)
make dev-d            # Idem en arrière-plan
make dev-down         # Arrête l'environnement dev

# Production
make prod             # Lance prod avec nginx + SSL
make prod-down        # Arrête prod

# Base de données
make db-studio        # Interface visuelle Drizzle (localhost:4983)
make db-migrate       # Applique les migrations
make db-generate      # Génère les migrations depuis le schema
make db-push          # Push le schema (dev, sans migration)
make db-backup        # Sauvegarde la DB dans ./backups/
make db-restore FILE=./backups/xxx.sql  # Restaure une sauvegarde

# Tests
make test             # Lance DB test + tests + cleanup
make test-watch       # Tests en mode watch

# Logs et debug
make logs-api         # Logs du backend
make logs-db          # Logs PostgreSQL
make ps               # État des conteneurs
make health           # Santé des services

# Maintenance
make stop             # Arrête tout
make clean            # Supprime tout (containers, volumes, images)
make install          # Installe les dépendances (bun install)
```

---

## Ports

| Service | Dev | Prod |
|---------|-----|------|
| Frontend | 5173 | 80/443 (via nginx) |
| API | 3000 | interne (via nginx) |
| DB | 5432 (exposé) | interne |
| DB Test | 5433 | - |
| Drizzle Studio | 4983 | - |

---

## Réseau : Docker vs Local

**Point critique** : les URLs de connexion diffèrent selon le contexte.

```
┌─────────────────────────────────────────────────────────────┐
│                        .env.dev                             │
│                  POSTGRES_PASSWORD=devpassword              │
└──────────────────────────┬──────────────────────────────────┘
                           │
           ┌───────────────┴───────────────┐
           ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────┐
│   Containers Docker     │     │   Outils locaux         │
│   (api, frontend)       │     │   (drizzle-kit, tests)  │
│                         │     │                         │
│ DATABASE_URL=           │     │ DATABASE_URL=           │
│ postgres://app:xxx      │     │ postgres://app:xxx      │
│   @db:5432/appdb        │     │   @localhost:5432/appdb │
│                         │     │                         │
│ "db" = hostname Docker  │     │ Port exposé sur l'hôte  │
└─────────────────────────┘     └─────────────────────────┘
           │                               │
           └───────────────┬───────────────┘
                           ▼
              ┌─────────────────────────┐
              │      PostgreSQL         │
              │    (container "db")     │
              └─────────────────────────┘
```

### Où sont définies les URLs ?

| Contexte | Fichier | URL |
|----------|---------|-----|
| Containers | `docker-compose.yml` | `@db:5432` |
| Outils locaux | `Makefile` (variable `DB_LOCAL`) | `@localhost:5432` |
| Tests | `Makefile` (hardcodé) | `@localhost:5433` |

---

## Drizzle ORM

### Configuration (`backend/drizzle.config.ts`)

```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,  // ⚠️ process.env, pas Bun.env
  },
} satisfies Config;
```

### Pourquoi `process.env` et pas `Bun.env` ?

`drizzle-kit` utilise Node.js internement, même lancé avec Bun. `Bun.env` n'existe pas dans Node → erreur "Bun is not defined".

### Workflow des migrations

```bash
# 1. Modifier le schema dans backend/src/db/schema/
# 2. Générer la migration
make db-generate

# 3. Vérifier le SQL généré dans backend/drizzle/
# 4. Appliquer la migration
make db-migrate
```

---

## Variables d'environnement

### `.env.dev`

```bash
POSTGRES_PASSWORD=devpassword
```

C'est tout. Le `DATABASE_URL` est géré par :
- `docker-compose.yml` pour les containers
- `Makefile` pour les outils locaux

### `.env.prod`

```bash
POSTGRES_PASSWORD=un_vrai_mot_de_passe_securise
```

⚠️ Ne jamais commit ce fichier.

---

## Docker Compose : architecture multi-fichiers

```bash
# Dev = base + surcharges dev
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Prod = base + surcharges prod
docker compose -f docker-compose.yml -f docker-compose.prod.yml up

# Test = fichier isolé
docker compose -f docker-compose.test.yml up
```

### Différences clés

| Aspect | Dev | Prod |
|--------|-----|------|
| Nginx | Désactivé (profile) | Actif |
| Ports DB | Exposé (5432) | Interne |
| Ports API | Exposé (3000) | Interne |
| Hot reload | Oui (volumes) | Non |
| SSL | Non | Oui (certbot) |
| Healthchecks | Basiques | Complets |

---

## Backup et Restore

### Sauvegarder

```bash
make db-backup
# → ./backups/backup_20250125_143052.sql
```

Utilise `pg_dump` pour exporter toute la DB (structure + données) en SQL.

### Restaurer

```bash
make db-restore FILE=./backups/backup_20250125_143052.sql
```

Envoie le fichier SQL à `psql` qui recrée les tables et données.

---

## Pièges courants

| Problème | Cause | Solution |
|----------|-------|----------|
| "Bun is not defined" | `drizzle-kit` utilise Node | Utiliser `process.env`, pas `Bun.env` |
| "EAI_AGAIN db" | URL avec `@db:5432` hors Docker | Utiliser `@localhost:5432` |
| DB non accessible | Container pas démarré | `make dev` d'abord |
| Migrations pas appliquées | Oubli après `db-generate` | Lancer `make db-migrate` |

---

## Démarrage rapide

```bash
# 1. Cloner et installer
git clone <repo>
cd habit-tracker
make install

# 2. Configurer l'environnement
cp .env.example .env.dev

# 3. Lancer
make dev

# 4. Vérifier
# → Frontend : http://localhost:5173
# → API : http://localhost:3000
# → DB Studio : make db-studio → http://localhost:4983
```
