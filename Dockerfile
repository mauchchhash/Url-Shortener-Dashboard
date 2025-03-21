FROM node:alpine
RUN corepack enable && yarn set version stable
WORKDIR /app
COPY . /app
CMD ["sh", "-c", "yarn install && yarn dev"]

# docker build -t uclient .
# docker run -p 3000:3000 -v ./:/app -it --name uclient uclient
# docker exec -it uclient sh
