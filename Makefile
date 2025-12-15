.PHONY: help dev prod stop restart logs logs-api logs-db logs-nginx clean ps shell-api shell-db health

# Couleurs pour l'affichage
GREEN  := \033[0;32m
YELLOW := \033[0;33m
NC     := \033[0m # No Color

help: ## Affiche cette aide
	@echo "$(GREEN)Commandes disponibles :$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}'

# =========================
# Développement
# =========================
dev: ## Lance l'environnement de développement
	docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env.dev up --build

dev-d: ## Lance l'environnement de développement en arrière-plan
	docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env.dev up -d --build

# =========================
# Production
# =========================
prod: ## Lance l'environnement de production
	docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod up -d --build

prod-logs: ## Affiche les logs de production en continu
	docker compose -f docker-compose.yml -f docker-compose.prod.yml logs -f

# =========================
# Gestion des conteneurs
# =========================
stop: ## Arrête tous les conteneurs
	docker compose -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.prod.yml down

restart: stop dev ## Redémarre l'environnement de développement

ps: ## Affiche l'état des conteneurs
	docker compose ps

# =========================
# Logs
# =========================
logs: ## Affiche tous les logs en continu
	docker compose logs -f

logs-api: ## Affiche les logs de l'API uniquement
	docker compose logs -f api

logs-db: ## Affiche les logs de la base de données
	docker compose logs -f db

logs-nginx: ## Affiche les logs de Nginx
	docker compose logs -f nginx

# =========================
# Shell interactif
# =========================
shell-api: ## Ouvre un shell dans le conteneur API
	docker compose exec api /bin/sh

shell-db: ## Ouvre psql dans le conteneur DB
	docker compose exec db psql -U app -d appdb

# =========================
# Maintenance
# =========================
clean: ## Supprime tous les conteneurs, volumes et images
	docker compose -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.prod.yml down -v
	docker system prune -af --volumes

health: ## Vérifie la santé des services
	@echo "$(GREEN)État des services :$(NC)"
	@docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Health}}"

# =========================
# SSL (production uniquement)
# =========================
ssl-init: ## Génère les certificats SSL pour la première fois
	@echo "$(YELLOW)Génération des certificats SSL...$(NC)"
	docker compose -f docker-compose.yml -f docker-compose.prod.yml exec certbot \
		certbot certonly --webroot -w /var/www/certbot \
		-d votredomaine.com \
		--email votre@email.com \
		--agree-tos \
		--no-eff-email

ssl-renew: ## Renouvelle les certificats SSL manuellement
	docker compose -f docker-compose.yml -f docker-compose.prod.yml exec certbot certbot renew

# =========================
# Base de données
# =========================
db-backup: ## Crée un backup de la base de données
	@mkdir -p ./backups
	docker compose exec db pg_dump -U app appdb > ./backups/backup_$(shell date +%Y%m%d_%H%M%S).sql
	@echo "$(GREEN)Backup créé dans ./backups/$(NC)"

db-restore: ## Restaure la base de données (nécessite DB_BACKUP_FILE=chemin/vers/backup.sql)
	@if [ -z "$(DB_BACKUP_FILE)" ]; then \
		echo "$(YELLOW)Usage: make db-restore DB_BACKUP_FILE=./backups/backup.sql$(NC)"; \
		exit 1; \
	fi
	docker compose exec -T db psql -U app appdb < $(DB_BACKUP_FILE)
	@echo "$(GREEN)Base de données restaurée$(NC)"