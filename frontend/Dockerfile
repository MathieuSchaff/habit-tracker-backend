# =========================
# Frontend Dockerfile (Production)
# Build avec Bun, serve avec Nginx
# =========================

FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copie du code source et build
COPY . .
RUN bun run build

# =========================
# Production : Nginx pour servir les fichiers statiques
# =========================
FROM nginx:1.27-alpine

# Copie de la config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie du build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]