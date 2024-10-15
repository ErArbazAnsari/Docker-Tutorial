# Best Way

FROM node

# Copy project files
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

# Install project dependencies
RUN npm install

# Set entry point
ENTRYPOINT [ "node", "server.js" ]
