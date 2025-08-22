# ==== Build ====
FROM node:20
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

RUN npx prisma generate
RUN npm run build

# ==== Runtime ====
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY . . 
EXPOSE 8081

CMD ["npm", "start"]