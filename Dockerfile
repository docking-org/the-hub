#React Initializations
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install react-scripts --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8000

#Run npm start using tmux
RUN apk add bash tmux
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]