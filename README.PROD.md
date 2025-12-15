# 🚀 README.prod.md - Production (VPS)

## 🎯 Objectif

Tout dans Docker : API + DB + Nginx + Certbot

## 🔐 Ports

### Public (Internet → VPS)

- `80` : HTTP (Nginx)
- `443` : HTTPS (Nginx)

### Interne (réseau Docker)

- `3000` : API (accessible via `http://api:3000`)
- `5432` : DB (accessible via `db:5432`)

Seul Nginx est exposé publiquement.

---

## 📋 Déploiement

### Prérequis

- ✅ VPS avec Docker et Docker Compose
- ✅ Domaine pointant vers l'IP du VPS
- ✅ Ports 80 et 443 ouverts (firewall)

### 1. Créer `.env.prod`

```bash
nano .env.prod
```

```env
POSTGRES_PASSWORD=VotreMotDePasseTrèsSecurisé2024!
```

⚠️ Mot de passe fort (32+ caractères), **ne jamais commiter**.

### 2. Configurer Nginx

Éditer `nginx/conf.d/default.conf` :

- Remplacer `votredomaine.com` par votre domaine
- Remplacer `votre@email.com` par votre email

### 3. Démarrer

```bash
bun run docker:prod
```

### 4. Vérifier

```bash
# État
docker compose ps

# Test HTTP
curl http://votredomaine.com/health
```

---

## 🔒 SSL (HTTPS)

### Générer le certificat

```bash
docker compose exec certbot certbot certonly \
  --webroot -w /var/www/certbot \
  --email votre@email.com \
  --agree-tos \
  --no-eff-email \
  -d votredomaine.com
```

### Vérifier

```bash
docker compose exec nginx ls -la /etc/letsencrypt/live/votredomaine.com/
```

Doit contenir `fullchain.pem` et `privkey.pem`.

### Redémarrer Nginx

```bash
docker compose restart nginx
```

### Test HTTPS

```bash
curl https://votredomaine.com/health
```

### Renouvellement automatique

Certbot renouvelle automatiquement :

- ✅ Check toutes les 12h
- ✅ Renouvelle 30 jours avant expiration

**Test manuel** :

```bash
docker compose exec certbot certbot renew --dry-run
```

---

## 🔍 Logs

### Tous les logs

```bash
bun run docker:logs
```

### Par service

```bash
docker compose logs -f api
docker compose logs -f db
docker compose logs -f nginx
docker compose logs -f certbot
```

### État des services

```bash
docker compose ps
```

---

## 🔄 Mise à jour

```bash
# 1. Pull
git pull origin main

# 2. Rebuild
bun run docker:prod

# 3. Vérifier
docker compose ps
curl https://votredomaine.com/health
```

### Rollback

```bash
git checkout HEAD~1
bun run docker:prod
```

---

## 💾 Base de données

### Backup

```bash
mkdir -p ./backups
docker compose exec db pg_dump -U app appdb > ./backups/backup_$(date +%Y%m%d_%H%M%S).sql
```

### Restauration

```bash
docker compose exec -T db psql -U app appdb < ./backups/backup_20241214_120000.sql
```

### Accès

```bash
docker compose exec db psql -U app -d appdb
```

---

## 🛑 Arrêter

### Arrêt simple (données conservées)

```bash
bun run docker:stop
```

### Tout supprimer (⚠️ perte de données)

```bash
bun run docker:clean
```

---

## 🔧 Problèmes

### 502 Bad Gateway

**Cause** : API ne répond pas

**Solution** :

```bash
docker compose ps
docker compose logs api
docker compose exec api ping db
docker compose restart api
```

### API ne démarre pas

**Cause** : Problème connexion DB

**Solution** :

```bash
docker compose exec api env | grep DATABASE
docker compose exec api nc -zv db 5432
docker compose logs db
docker compose down
docker compose up -d
```

### SSL expiré

**Solution** :

```bash
docker compose exec certbot certbot renew --force-renewal
docker compose restart nginx
```

### Port déjà utilisé

**Cause** : Apache ou autre service

**Solution** :

```bash
sudo lsof -i :80
sudo lsof -i :443
sudo systemctl stop apache2
sudo systemctl disable apache2
```

---

## 📊 Healthchecks

Ordre de démarrage automatique :

```
1. PostgreSQL
   └─ healthy ✅

2. API (depends_on DB)
   └─ healthy ✅

3. Nginx (depends_on API)
   └─ running ✅

4. Certbot (renouvelle toutes les 12h)
   └─ running ✅
```

**Vérifier** :

```bash
docker compose ps
curl http://localhost:3000/health
```

---

## 🧠 Notes

### Variables

- Host DB : `db` (pas `localhost`)
- `DATABASE_URL` : auto-construit via `postgres://app:${POSTGRES_PASSWORD}@db:5432/appdb`

### Volumes persistants

- `pgdata` : Données PostgreSQL
- `certbot_data` : Certificats SSL
- `certbot_www` : Challenge Let's Encrypt

⚠️ `docker compose down -v` les supprime.

### Réseau

Tous dans `appnet` :

- API → DB via `db:5432`
- Nginx → API via `api:3000`
- Internet → Nginx via `80/443`

---

## ⚡ Checklist

### Avant déploiement

- [ ] DNS configuré
- [ ] Firewall configuré (22, 80, 443)
- [ ] Docker installé
- [ ] `.env.prod` créé
- [ ] `nginx/conf.d/default.conf` configuré

### Déploiement

- [ ] `bun run docker:prod`
- [ ] `docker compose ps`
- [ ] Test HTTP
- [ ] Générer SSL
- [ ] Test HTTPS

### Après

- [ ] Backup automatique DB
- [ ] Monitoring
- [ ] Tester renouvellement SSL

---

## 🔐 Sécurité

### Firewall

```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### SSH

```bash
sudo nano /etc/ssh/sshd_config
# PermitRootLogin no
sudo systemctl restart sshd
```

### Updates

```bash
# Système
sudo apt update && sudo apt upgrade -y

# Docker
docker compose pull
docker compose up -d
```

---

## 📚 Commandes

```bash
# État
docker compose ps

# Logs
docker compose logs -f
bun run docker:logs:api

# Shell
docker compose exec api sh
docker compose exec db psql -U app -d appdb

# Redémarrer
docker compose restart api

# Recréer
docker compose up -d --force-recreate
```
