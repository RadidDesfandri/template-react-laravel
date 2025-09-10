FROM nginx:alpine

# Copy konfigurasi Nginx kustom
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Create directory for frontend
RUN mkdir -p /var/www/frontend

# Set permissions
RUN chown -R nginx:nginx /var/www