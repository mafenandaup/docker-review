# ==== Build do node ====
FROM node:20
WORKDIR /app

# Instala deps primeiro (cache)
COPY package*.json ./
RUN npm ci

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

# copia tudo do projeto:
COPY . . 

EXPOSE 8080
CMD ["npm", "start"]