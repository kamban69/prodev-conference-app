FROM node:15.8.0-alpine3.12
WORKDIR /usr/src/app

COPY package*.json ./
COPY ./database.json .

RUN ["npm", "install"]
COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && npm install db-migrate && npm i && npm run migrate -- up && npm run start
EXPOSE 80