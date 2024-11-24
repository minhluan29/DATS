# Sử dụng Node.js image để build backend
FROM node:18-alpine

# Set thư mục làm việc trong container
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build ứng dụng
RUN npm run build

# Expose cổng (phải trùng với PORT trong biến môi trường)
EXPOSE 1000

# Chạy ứng dụng
CMD ["npm", "run", "start:prod"]
