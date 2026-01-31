# =========================
# Frontend Dockerfile (Production)
# Build avec Bun, serve avec Nginx
# =========================
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copier structure workspace
COPY package.json bun.lock ./
COPY frontend/package.json frontend/
COPY shared/package.json shared/
COPY backend/package.json backend/
RUN bun install --frozen-lockfile

# Copie du code source
COPY frontend/ frontend/
COPY shared/ shared/

# Build depuis le dossier frontend
WORKDIR /app/frontend
RUN bun run build

# =========================
# Production : Nginx pour servir les fichiers statiques
# =========================
FROM nginx:1.27-alpine

# Copie de la config nginx personnalisée
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Copie du build (ajuster le chemin selon ta config Vite)
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
