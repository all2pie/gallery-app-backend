

FROM node:13-alpine AS build

WORKDIR /src

COPY package*.json ./

RUN  npm i --only=development  && npm i commander

COPY . .

RUN npm run build


FROM node:13-alpine

ENV PORT=3011
ENV NODE_ENV=production

WORKDIR /src

COPY package*.json ./

RUN npm i --only=production

COPY --from=build /src/dist ./dist

EXPOSE ${PORT}

CMD [ "node", "dist/src/main.js"]