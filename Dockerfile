#React Initializations
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8000


#Adding Bash and Gunicorn
# RUN apk add --no-cache bash python3 py3-pip
# RUN python3 -m venv /venv
# ENV PATH="/venv/bin:$PATH"
# RUN pip install gunicorn

#Run the gunicorn command in run.sh

RUN apk add --no-cache tmux
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]