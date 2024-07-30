FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

USER node

CMD ["npm", "run", "dev"]
