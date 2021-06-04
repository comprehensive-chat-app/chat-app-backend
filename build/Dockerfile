FROM node:15.14.0-alpine3.13 as builder
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm ci
RUN npm run build
RUN npm prune --production

FROM node:15.14.0-alpine3.13

COPY --from=builder /dist /dist
COPY --from=builder /node_modules /node_modules

ENV NODE_ENV production
ENV TZ utc

CMD ["node", "/dist/main.js"]
