FROM node:15.8.0
WORKDIR /usr/src/accounts

COPY package*.json ./
RUN npm run migrate -- up
RUN npm run dev

EXPOSE 80
CMD [ "npm", "run", "dev" ]