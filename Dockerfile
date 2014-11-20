FROM node

ADD ./ /src

WORKDIR /src

RUN npm install

EXPOSE 8000

ENTRYPOINT ["node", "/src/app.js"]