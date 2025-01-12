FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8000

RUN apk add --no-cache bash
RUN apk add --no-cache python3 py3-pip
RUN pip install gunicorn
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]