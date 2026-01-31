.PHONY: help dev dev-d dev-rebuild dev-rebuild-api dev-rebuild-frontend prod prod-logs stop restart logs logs-api logs-db logs-nginx logs-frontend clean clean-images ps shell-api shell-db shell-frontend health test test-db-up test-db-down ssl-init ssl-renew db-backup db-restore db-migrate db-studio

# Couleurs pour l'affichage
GREEN  := \033[0;32m
YELLOW := \033[0;33m
CYAN   := \033[0;36m
NC     := \033[0m

# Variables communes
COMPOSE_DEV = docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env.dev
COMPOSE_PROD = docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod
COMPOSE_TEST = docker compose -f docker-compose.test.yml

help: ## Affiche cette aide
	@echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo "$(GREEN)  Commandes disponibles$(NC)"
	@echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-22s$(NC) %s\n", $$1, $$2}'

# =========================
# Développement
# =========================

dev: ## Lance l'environnement de développement
	$(COMPOSE_DEV) up --build

dev-d: ## Lance le dev en arrière-plan
	$(COMPOSE_DEV) up -d --build

dev-down: ## Arrête l'environnement de développement
	$(COMPOSE_DEV) down

dev-rebuild: ## Rebuild complet sans cache (après ajout de dépendances)
	$(COMPOSE_DEV) build --no-cache
	$(COMPOSE_DEV) up

dev-rebuild-api: ## Rebuild uniquement l'API sans cache
	$(COMPOSE_DEV) build --no-cache api
	$(COMPOSE_DEV) up

dev-rebuild-frontend: ## Rebuild uniquement le frontend sans cache
	$(COMPOSE_DEV) build --no-cache frontend
	$(COMPOSE_DEV) up

# =========================
# Production
# =========================
prod: ## Lance l'environnement de production
	$(COMPOSE_PROD) up -d --build

prod-logs: ## Affiche les logs de production
	$(COMPOSE_PROD) logs -f

prod-down: ## Arrête l'environnement de production
	$(COMPOSE_PROD) down

# Variable pour l'URL de test (plus propre)
TEST_DB_URL=postgres://app:testpassword@localhost:5433/appdb_test

test-db-up: ## Lance la DB de test et crée les tables
	$(COMPOSE_TEST) up -d
	@echo "$(CYAN)Attente que la DB soit prête...$(NC)"
	@sleep 3
	@echo "$(CYAN)Synchronisation du schéma (Drizzle Push)...$(NC)"
	@cd backend && DATABASE_URL=$(TEST_DB_URL) bun x drizzle-kit push
	@echo "$(GREEN)✓ DB de test prête et structurée$(NC)"

test-db-down: ## Arrête la DB de test
	$(COMPOSE_TEST) down

test: test-db-up ## Lance les tests (backend)
	@cd backend && DATABASE_URL=$(TEST_DB_URL) bun test || ($(MAKE) test-db-down && exit 1)
	@$(MAKE) test-db-down
	@echo "$(GREEN)✓ Tests terminés$(NC)"

test-watch: test-db-up ## Lance les tests en mode watch
	@cd backend && DATABASE_URL=$(TEST_DB_URL) bun test --watch

# Utilisation : make test-only ARGS="auth"
test-only: test-db-up
	@cd backend && DATABASE_URL=$(TEST_DB_URL) bun test -t "$(ARGS)"
	@$(MAKE) test-db-down

# =========================
# Gestion des conteneurs
# =========================
stop: ## Arrête tous les conteneurs
	$(COMPOSE_DEV) down 2>/dev/null || true
	$(COMPOSE_PROD) down 2>/dev/null || true
	$(COMPOSE_TEST) down 2>/dev/null || true

restart: dev-down dev ## Redémarre l'environnement de développement

ps: ## Affiche l'état des conteneurs
	@docker compose ps

# =========================
# Logs
# =========================
logs: ## Affiche tous les logs
	docker compose logs -f

logs-api: ## Logs de l'API
	docker compose logs -f api

logs-db: ## Logs de la base de données
	docker compose logs -f db

logs-nginx: ## Logs de Nginx
	docker compose logs -f nginx

logs-frontend: ## Logs du frontend
	docker compose logs -f frontend

# =========================
# Shell interactif
# =========================
shell-api: ## Shell dans le conteneur API
	docker compose exec api /bin/sh

shell-db: ## psql dans le conteneur DB
	docker compose exec db psql -U app -d appdb

shell-frontend: ## Shell dans le conteneur frontend
	docker compose exec frontend /bin/sh

# =========================
# Base de données
# =========================

# Variable locale pour les outils hors Docker
DB_LOCAL = postgres://app:$(POSTGRES_PASSWORD)@localhost:5432/appdb

db-migrate: ## Applique les migrations Drizzle
	DATABASE_URL=$(DB_LOCAL) cd backend && npx drizzle-kit migrate

db-generate: ## Génère les migrations Drizzle
	DATABASE_URL=$(DB_LOCAL) cd backend && npx drizzle-kit generate

db-push: ## Push le schema Drizzle (dev)
	DATABASE_URL=$(DB_LOCAL) cd backend && npx drizzle-kit push

db-studio: ## Lance Drizzle Studio
	DATABASE_URL=$(DB_LOCAL) cd backend && npx drizzle-kit studio --port 4983

db-backup: ## Backup de la base de données
	@mkdir -p ./backups
	docker compose exec db pg_dump -U app appdb > ./backups/backup_$(shell date +%Y%m%d_%H%M%S).sql
	@echo "$(GREEN)✓ Backup créé dans ./backups/$(NC)"

db-restore: ## Restaure la DB (usage: make db-restore FILE=./backups/backup.sql)
	@if [ -z "$(FILE)" ]; then \
		echo "$(YELLOW)Usage: make db-restore FILE=./backups/backup.sql$(NC)"; \
		exit 1; \
	fi
	docker compose exec -T db psql -U app appdb < $(FILE)
	@echo "$(GREEN)✓ Base de données restaurée$(NC)"

# =========================
# SSL (production)
# =========================
ssl-init: ## Génère les certificats SSL (modifier le domaine d'abord)
	@echo "$(YELLOW)⚠ Modifier le domaine et l'email dans le Makefile avant d'exécuter$(NC)"
	@read -p "Continuer ? [y/N] " confirm && [ "$$confirm" = "y" ] || exit 1
	$(COMPOSE_PROD) exec certbot \
		certbot certonly --webroot -w /var/www/certbot \
		-d votredomaine.com \
		--email votre@email.com \
		--agree-tos \
		--no-eff-email

ssl-renew: ## Renouvelle les certificats SSL
	$(COMPOSE_PROD) exec certbot certbot renew

# =========================
# Maintenance
# =========================
clean: ## Supprime conteneurs, volumes et images
	@echo "$(YELLOW)⚠ Cette action supprime toutes les données Docker$(NC)"
	@read -p "Continuer ? [y/N] " confirm && [ "$$confirm" = "y" ] || exit 1
	$(COMPOSE_DEV) down -v 2>/dev/null || true
	$(COMPOSE_PROD) down -v 2>/dev/null || true
	$(COMPOSE_TEST) down -v 2>/dev/null || true
	docker system prune -af --volumes

clean-soft: ## Supprime les conteneurs (garde les volumes)
	$(COMPOSE_DEV) down 2>/dev/null || true
	$(COMPOSE_PROD) down 2>/dev/null || true
	$(COMPOSE_TEST) down 2>/dev/null || true

clean-images: ## Supprime les images du projet (force rebuild)
	$(COMPOSE_DEV) down 2>/dev/null || true
	docker rmi habit-tracker-frontend habit-tracker-api 2>/dev/null || true
	@echo "$(GREEN)✓ Images supprimées. Lancer 'make dev' pour rebuild.$(NC)"

health: ## Vérifie la santé des services
	@echo "$(GREEN)État des services :$(NC)"
	@docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Health}}"

# =========================
# Installation
# =========================
install: ## Installe les dépendances (backend + frontend)
	cd backend && bun install
	cd frontend && bun install

build: ## Build les images Docker
	$(COMPOSE_PROD) build
