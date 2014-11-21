FROM node

ADD ./ /src

WORKDIR /src

RUN npm install

ENTRYPOINT ["node", "/src/app.js"]