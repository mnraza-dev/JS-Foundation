FROM  node:20-alpine

WORKDIR /app

COPY package.json .

RUN pnpm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]