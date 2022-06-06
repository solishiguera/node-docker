FROM node:8

RUN mkdir /src
WORKDIR /src

ADD package.json /src/package.json
RUN npm install

COPY . /src

EXPOSE 4005

CMD npm start