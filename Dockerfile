# Build environment
FROM node:18.12.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD mkdir result_build && cp -r build result_build
