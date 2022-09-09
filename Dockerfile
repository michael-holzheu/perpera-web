# Dockerfile for perpera-web
#
# Build:   docker build -t perpera-web .
# Run:     docker run -d -p 3000:3000 perpera-web
# Web-URL: http://localhost:3000

FROM ubuntu
WORKDIR /app
COPY . .
RUN apt-get update
RUN apt-get install -y npm
RUN npm install
CMD npm start
EXPOSE 3000
