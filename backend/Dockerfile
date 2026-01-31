# ---------- base ----------
FROM oven/bun:1-debian AS base
WORKDIR /app

# ---------- deps (cache) ----------
FROM base AS deps
# Copier structure workspace
COPY package.json bun.lock ./
COPY backend/package.json backend/
COPY shared/package.json shared/
COPY frontend/package.json frontend/
RUN bun install --frozen-lockfile

# ---------- dev ----------
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY backend/ ./backend/
COPY shared/ ./shared/
WORKDIR /app/backend
EXPOSE 3000
CMD ["bun", "--watch", "src/index.ts"]

# ---------- build (ts -> dist) ----------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY backend/ ./backend/
COPY shared/ ./shared/
WORKDIR /app/backend
RUN bun run build

# ---------- prod ----------
FROM oven/bun:1-debian AS prod
WORKDIR /app
ENV NODE_ENV=production

# Copier structure workspace pour prod
COPY package.json bun.lock ./
COPY backend/package.json backend/
COPY shared/ shared/
COPY frontend/package.json frontend/
RUN bun install --frozen-lockfile --production

# Copier le build
COPY --from=build /app/backend/dist ./dist

USER bun
EXPOSE 3000
CMD ["bun", "dist/index.js"]
