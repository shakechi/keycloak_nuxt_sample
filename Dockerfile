FROM node:14.15.5-alpine3.13

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /app

RUN apk update

COPY ./package*.json ./

RUN npm install

