FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
COPY run.sh .
RUN npm run build
EXPOSE 8000

ADD run.sh ./
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]