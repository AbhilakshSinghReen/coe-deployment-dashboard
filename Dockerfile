# Stage 1: React App Builder
FROM node:18-alpine as react-builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

# Stage 2: Production
FROM nginx:1.27.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=react-builder /app/dist /usr/share/nginx/html

EXPOSE 8081

ENTRYPOINT ["nginx", "-g", "daemon off;"]
