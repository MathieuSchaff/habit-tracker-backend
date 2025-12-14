# 🚀 README.prod.md - Mode Production (VPS)

## 🎯 Objectif

Tout dans Docker : API + DB + Nginx + Certbot

## 🔐 Exposition des ports

### ✅ Public (Internet → VPS)

- Nginx : `80` (HTTP)
- Nginx : `443` (HTTPS)

### 🔒 Interne (réseau Docker)

- API : `3000` (accessible par Nginx via `http://api:3000`)
- DB : `5432` (accessible par API via `db:5432`)

👉 Seul Nginx est exposé publiquement

## 📋 Déploiement

### 1️⃣ Créer `.env`

```bash
nano .env
```

```env
POSTGRES_PASSWORD=mot_de_passe_ultra_securise
```

⚠️ Utiliser un mot de passe fort (32+ caractères)

### 2️⃣ Démarrer la stack

```bash
docker compose up -d --build
```

### 3️⃣ Vérifier

```bash
# État des services
docker compose ps

# Test API
curl http://localhost/health
```

## 🔒 Configuration SSL (HTTPS)

### Prérequis

- Domaine pointant vers l'IP du VPS
- Port 80 et 443 ouverts

### Obtenir le certificat

```bash
docker exec app_certbot certbot certonly \
  --webroot -w /var/www/certbot \
  --email votre@email.com \
  --agree-tos \
  -d votre-domaine.com
```

### Activer HTTPS

1. Éditer `nginx/conf.d/default.conf`
2. Décommenter le bloc HTTPS (ligne 28)
3. Remplacer `ton-domaine.com` par votre domaine
4. Recharger Nginx :

```bash
docker exec app_nginx nginx -s reload
```

### Renouvellement automatique

Certbot renouvelle automatiquement tous les 60 jours (check toutes les 12h)

## 🔍 Logs

```bash
# Tous les services
docker compose logs -f

# Par service
docker logs -f app_api
docker logs -f app_db
docker logs -f app_nginx
```

## 🔄 Mise à jour

```bash
# Pull nouveau code
git pull

# Rebuild et redémarrer
docker compose up -d --build
```

## 🛑 Arrêter

```bash
# Sans supprimer les données
docker compose down

# Avec suppression des volumes (⚠️ perte de données)
docker compose down -v
```

## 💾 Backup DB

```bash
# Sauvegarder
docker exec app_db pg_dump -U app appdb > backup_$(date +%Y%m%d).sql

# Restaurer
cat backup.sql | docker exec -i app_db psql -U app -d appdb
```

## 🔧 Résolution de problèmes

### Erreur 502 Bad Gateway

```bash
# Vérifier que l'API est healthy
docker compose ps

# Logs API
docker logs app_api

# Tester Nginx
docker exec app_nginx nginx -t
```

### API ne démarre pas

```bash
# Vérifier les variables
docker exec app_api env | grep DATABASE

# Vérifier connexion DB
docker exec app_api ping db
```

### SSL expiré

```bash
# Forcer le renouvellement
docker exec app_certbot certbot renew --force-renewal
docker exec app_nginx nginx -s reload
```

## 📊 Healthchecks

L'ordre de démarrage est géré automatiquement :

```
1. PostgreSQL démarre
2. ✅ DB healthy → API démarre
3. ✅ API healthy → Nginx démarre
4. Certbot renouvelle les certificats (12h)
```

## 🧠 Notes importantes

- En prod, le host DB est `db` (pas `localhost`)
- Les volumes (`pgdata`, `certbot_data`) persistent entre redémarrages
- Nginx proxifie tout vers l'API (port 3000 non exposé)
- WebSocket supporté sur `/ws`

## ⚡ Checklist rapide

```bash
# 1. Variables
nano .env

# 2. Démarrer
docker compose up -d --build

# 3. Vérifier
docker compose ps
curl http://localhost/health

# 4. SSL
docker exec app_certbot certbot certonly ...

# 5. Activer HTTPS
nano nginx/conf.d/default.conf
docker exec app_nginx nginx -s reload

# 6. Test final
curl https://votre-domaine.com/health
```

✅ Done !
