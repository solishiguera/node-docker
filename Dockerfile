FROM node:8

# Create app directory and epgpub directory
RUN mkdir /src
WORKDIR /src

# Install app dependencies
ADD package.json /src/package.json
RUN npm install

#Bundle app source
COPY . /src

EXPOSE 4005

CMD npm start

# FROM node:8
# WORKDIR /usr/src/app
# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 4000