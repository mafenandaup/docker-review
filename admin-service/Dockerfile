# ==== Build do node ====
FROM node:20 AS build
WORKDIR /app

# Instala deps primeiro (cache)
COPY package*.json ./
RUN npm install

# Copia config + código
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Gera client do Prisma e compila TypeScript
RUN npx prisma generate
RUN npm run build
# ==== Runtime ====
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache openssl

# Copia apenas o necessário da build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY package*.json ./

EXPOSE 8080
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]