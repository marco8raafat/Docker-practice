FROM node:22-alpine as base
RUN apk add --no-cache bash
#base stage


FROM base as development
#will take the result of base stage and will continue to it (add to it) development stage.
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run","start-dev"]


FROM base as production
#will take the result of base stage and will continue to it (add to it) production stage.
WORKDIR /app
COPY package.json .
RUN npm install --only=production 
COPY . .
EXPOSE 4000
CMD ["npm", "start"]