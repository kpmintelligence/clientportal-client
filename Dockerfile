FROM mhart/alpine-node:7.4
WORKDIR /opt/app
ADD . /opt/app
RUN apk update
RUN apk add git make gcc g++ python
RUN npm install
EXPOSE 3000 3001
CMD ["npm","run","serve"]
