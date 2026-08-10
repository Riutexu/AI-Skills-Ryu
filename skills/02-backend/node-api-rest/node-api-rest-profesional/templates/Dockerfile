# Dockerfile — build multi-etapa para la API Node.js
# Build:  docker build -t mi-api .
# Run:    docker run --rm -p 3000:3000 --env-file .env mi-api

# ---------------------------------------------------------------------------
# Etapa 1: dependencias de desarrollo (solo para ejecutar npm ci)
# ---------------------------------------------------------------------------
FROM node:22-alpine AS dependencias
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ---------------------------------------------------------------------------
# Etapa 2: build con todas las dependencias
# ---------------------------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

COPY --from=dependencias /app/node_modules ./node_modules
COPY . .

# ---------------------------------------------------------------------------
# Etapa 3: runtime final, mínimo y sin vulnerabilidades innecesarias
# ---------------------------------------------------------------------------
FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

# Solo dependencias de producción
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

# Código de la aplicación
COPY --from=build /app/src ./src

# Usuario sin privilegios
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/health || exit 1

CMD ["node", "src/server.js"]