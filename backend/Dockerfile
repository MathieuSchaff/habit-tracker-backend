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
COPY --from=deps /app/backend/node_modules ./backend/node_modules
COPY backend/ ./backend/
COPY shared/ ./shared/
WORKDIR /app/backend
EXPOSE 3000
CMD ["bun", "--watch", "src/index.ts"]

# ---------- prod ----------
FROM oven/bun:1-debian AS prod
WORKDIR /app
ENV NODE_ENV=production

COPY package.json bun.lock ./
COPY backend/package.json backend/
COPY shared/package.json shared/
COPY frontend/package.json frontend/
RUN bun install --frozen-lockfile --production

COPY backend/src ./backend/src
COPY shared/src ./shared/src

USER bun
EXPOSE 3000
CMD ["bun", "backend/src/index.ts"]
