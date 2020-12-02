FROM node:14

RUN mkdir -p /usr/post-service
WORKDIR /usr/post-service

COPY package*.json /usr/post-service/
RUN npm install

COPY . /usr/post-service/

EXPOSE 5000

CMD "npm" "run" "watch"