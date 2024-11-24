# Sử dụng Node.js image để build ReactJS
FROM node:18-alpine AS builder

# Set thư mục làm việc trong container
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build ứng dụng
RUN npm run build

# Sử dụng nginx để phục vụ file tĩnh
FROM nginx:1.23-alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose cổng 80
EXPOSE 1010

# Cấu hình khởi chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
