# Multi-stage build for security and optimization
FROM node:18-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy application code
COPY . .

# Production stage
FROM node:18-alpine

# Install security updates
RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    curl \
    tini && \
    rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

# Set working directory
WORKDIR /app

# Copy built application from builder
COPY --from=builder --chown=nodeuser:nodejs /app/node_modules ./node_modules
COPY --chown=nodeuser:nodejs . .

# Create logs directory
RUN mkdir -p logs && \
    chown -R nodeuser:nodejs logs

# Set security options
RUN chmod -R 755 /app && \
    chmod -R 777 /app/logs

# Switch to non-root user
USER nodeuser

# Expose port
EXPOSE 3000

# Use tini for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1); });"

# Start application
CMD ["node", "server.js"]