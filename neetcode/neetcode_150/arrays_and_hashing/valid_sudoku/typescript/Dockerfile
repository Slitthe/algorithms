FROM node:22.16

WORKDIR /usr/src/app

RUN npm install -g tsx

RUN npm init -y

RUN npm install jest ts-jest @types/jest

RUN npx ts-jest config:init

COPY solution.ts solution.test.ts ./

ENTRYPOINT [ "npx" ]

CMD ["jest"]
