# ---------- base ----------
FROM oven/bun:1-debian AS base
WORKDIR /app

# ---------- deps (cache) ----------
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---------- dev ----------
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["bun", "--watch", "src/index.ts"]

# ---------- build (ts -> dist) ----------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---------- prod ----------
FROM oven/bun:1-debian AS prod
WORKDIR /app
ENV NODE_ENV=production

# install only production deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# copy compiled output
COPY --from=build /app/dist ./dist

USER bun
EXPOSE 3000
CMD ["bun", "dist/index.js"]
