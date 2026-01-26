.PHONY: help dev dev-d prod prod-logs stop restart logs logs-api logs-db logs-nginx logs-frontend clean ps shell-api shell-db shell-frontend health test test-db-up test-db-down ssl-init ssl-renew db-backup db-restore db-migrate db-studio

# Couleurs pour l'affichage
GREEN  := \033[0;32m
YELLOW := \033[0;33m
CYAN   := \033[0;36m
NC     := \033[0m

help: ## Affiche cette aide
	@echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo "$(GREEN)  Commandes disponibles$(NC)"
	@echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-18s$(NC) %s\n", $$1, $$2}'

# =========================
# Développement
# =========================

dev: ## Lance l'environnement de développement
	docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env.dev up --build

dev-d: ## Lance le dev en arrière-plan
	docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env.dev up -d --build

dev-down: ## Arrête l'environnement de développement
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down

# =========================
# Production
# =========================
prod: ## Lance l'environnement de production
	docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod up -d --build

prod-logs: ## Affiche les logs de production
	docker compose -f docker-compose.yml -f docker-compose.prod.yml logs -f

prod-down: ## Arrête l'environnement de production
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down

# =========================
# Tests
# =========================
test-db-up: ## Lance la DB de test
	docker compose -f docker-compose.test.yml up -d
	@echo "$(CYAN)Attente que la DB soit prête...$(NC)"
	@sleep 3

test-db-down: ## Arrête la DB de test
	docker compose -f docker-compose.test.yml down

test: test-db-up ## Lance les tests (backend)
	@cd backend && DATABASE_URL=postgres://app:testpassword@localhost:5433/appdb_test bun test || ($(MAKE) test-db-down && exit 1)
	@$(MAKE) test-db-down
	@echo "$(GREEN)✓ Tests terminés$(NC)"

test-watch: test-db-up ## Lance les tests en mode watch
	cd backend && DATABASE_URL=postgres://app:testpassword@localhost:5433/appdb_test bun test --watch

# =========================
# Gestion des conteneurs
# =========================
stop: ## Arrête tous les conteneurs
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down 2>/dev/null || true
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down 2>/dev/null || true
	docker compose -f docker-compose.test.yml down 2>/dev/null || true

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
	docker compose -f docker-compose.yml -f docker-compose.prod.yml exec certbot \
		certbot certonly --webroot -w /var/www/certbot \
		-d votredomaine.com \
		--email votre@email.com \
		--agree-tos \
		--no-eff-email

ssl-renew: ## Renouvelle les certificats SSL
	docker compose -f docker-compose.yml -f docker-compose.prod.yml exec certbot certbot renew

# =========================
# Maintenance
# =========================
clean: ## Supprime conteneurs, volumes et images
	@echo "$(YELLOW)⚠ Cette action supprime toutes les données Docker$(NC)"
	@read -p "Continuer ? [y/N] " confirm && [ "$$confirm" = "y" ] || exit 1
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down -v 2>/dev/null || true
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down -v 2>/dev/null || true
	docker compose -f docker-compose.test.yml down -v 2>/dev/null || true
	docker system prune -af --volumes

clean-soft: ## Supprime les conteneurs (garde les volumes)
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down 2>/dev/null || true
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down 2>/dev/null || true
	docker compose -f docker-compose.test.yml down 2>/dev/null || true

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
	docker compose -f docker-compose.yml -f docker-compose.prod.yml build
