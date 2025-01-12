FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8000

RUN echo $(ls)
RUN echo $(cat ./run.sh)
RUN echo $(readlink -f run.sh)

RUN apk add --no-cache bash
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]