FROM node

ADD ./ /src

EXPOSE 8000

ENTRYPOINT ["node", "/src/app.js"]