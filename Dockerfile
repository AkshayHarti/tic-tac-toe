FROM node:22.11.0-alpine

WORKDIR /app

RUN npm install -g pnpm

run npm install -g serve

COPY . .

RUN pnpm install

RUN pnpm run build

EXPOSE 3002

# Command to run the application
CMD ["serve", "-p", "3002", "-s", "dist"]

