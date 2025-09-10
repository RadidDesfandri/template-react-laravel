# Ganti base image dari alpine ke slim untuk kompatibilitas yang lebih baik
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY ./frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY ./frontend .

# Expose port for Vite dev server
EXPOSE 3000

# Set environment variables untuk file watching
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Start development server with hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]