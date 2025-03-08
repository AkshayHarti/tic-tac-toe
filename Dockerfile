FROM node:22-alpine AS base

WORKDIR /app

FROM base AS build
RUN npm install -g pnpm

COPY . /app/

RUN pnpm install --frozen-lockfile

RUN pnpm run build

FROM nginx:1.27.4-alpine-slim AS final-stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the healthcheck script
COPY healthcheck.sh /healthcheck.sh
RUN chmod +x /healthcheck.sh

EXPOSE 80

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]
