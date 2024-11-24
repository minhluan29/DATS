# Build frontend (ReactJS)
FROM node:18-alpine AS frontend-builder
WORKDIR /app/admin
COPY admin/package.json admin/package-lock.json ./
RUN npm install
COPY admin ./
RUN npm run build

# Build backend (NestJS)
FROM node:18-alpine AS backend-builder
WORKDIR /app/api
COPY api/package.json api/package-lock.json ./
RUN npm install
COPY api ./
RUN npm run build

# Final image
FROM node:18-alpine
WORKDIR /app

# Copy backend build
COPY --from=api-builder /app/api ./

# Copy frontend build
COPY --from=admin-builder /app/admin/build ./public

# Expose port
EXPOSE 3000

# Start backend server
CMD ["node", "dist/main"]
