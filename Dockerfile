#React Initializations
FROM node:24-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install vite
COPY . .
RUN npm run build
EXPOSE 8000

#Run npm start using tmux
RUN apk add bash tmux
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]
