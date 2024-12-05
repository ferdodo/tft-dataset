FROM node
WORKDIR /tft-dataset
COPY package.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=low
COPY . .
RUN npm run build

WORKDIR /publish/tft-dataset
RUN cp -R /tft-dataset/dist dist
RUN cp /tft-dataset/package.json package.json
RUN cp /tft-dataset/tsconfig.json tsconfig.json
