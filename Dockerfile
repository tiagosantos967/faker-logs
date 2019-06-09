FROM node:8.4.0

COPY . /faker-logs
WORKDIR /faker-logs

RUN npm install

CMD npm run standalone