FROM node:14-alpine AS buildapp
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
FROM node:14-alpine
# Set a non-root user to run the application
RUN adduser -D myuser
WORKDIR /app
# Copy only the necessary files from the build stage to the runtime stage
COPY --from=buildapp /app /app
EXPOSE 3000
# Switch to non-root user for security
USER myuser
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --fail http://localhost:3000/health || exit 1
CMD ["node", "index.js"]
