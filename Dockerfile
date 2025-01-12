FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8000

CMD [ "pwd" ]
CMD [ "ls" ]
RUN chmod +x run.sh
ENTRYPOINT "./run.sh"