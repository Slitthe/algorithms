FROM node:22.16

WORKDIR /usr/src/app

COPY solution.ts solution.test.ts ./

RUN npm install -g tsx

RUN npm init -y

RUN npm install jest ts-jest @types/jest

RUN npx ts-jest config:init

ENTRYPOINT [ "npx" ]

CMD ["jest"]

# CMD ["./solution.test.ts"]