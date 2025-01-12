FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8000

RUN echo $(ls)
RUN echo $(ls the-hub)
RUN echo $(pwd)
RUN chmod +x run.sh
ENTRYPOINT "./run.sh"