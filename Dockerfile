# Image Bun stable
FROM oven/bun:1-debian

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances en premier (cache Docker)
COPY package.json bun.lockb* ./

# Installer les dépendances
RUN bun install --frozen-lockfile

# Copier le reste du code
COPY . .

# Mode production
ENV NODE_ENV=production

# Port exposé (interne Docker)
EXPOSE 3000

# Lancer l'API
CMD ["bun", "src/index.ts"]
