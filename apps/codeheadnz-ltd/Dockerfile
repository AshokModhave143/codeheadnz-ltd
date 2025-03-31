FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable && corepack prepare yarn@4.3.1 --activate
RUN yarn install

COPY dist/apps/codeheadnz-ltd ./

RUN addgroup --system codeheadnz-ltd && \
    adduser --system -G codeheadnz-ltd codeheadnz-ltd

RUN chown -R codeheadnz-ltd:codeheadnz-ltd .

EXPOSE 3000

CMD [ "npm", "start" ]
