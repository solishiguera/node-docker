FROM node:8

RUN mkdir /src
WORKDIR /src

ADD package.json /src/package.json
RUN npm install

COPY . /src

EXPOSE 4010

CMD npm start