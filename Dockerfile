# Dockerfile for perpera-web
#
# Build:   docker build -t perpera-web .
# Run:     docker run -d -p 3000:3000 perpera-web
# Web-URL: http://localhost:3000

FROM alpine:3.14
WORKDIR /app
COPY . .
RUN apk add npm
RUN npm install
CMD npm start
EXPOSE 3000
