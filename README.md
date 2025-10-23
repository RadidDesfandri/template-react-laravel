# 📌 Monorepo React + Laravel + Docker
Monorepo ini menggabungkan:
- Frontend: React + TypeScript + Tailwind CSS (Vite)
- Backend: Laravel (PHP-FPM)
- Web Server: Nginx
- Docker Compose untuk mengatur semua service

## 📂 Struktur Folder
```
.
├── backend/            # Source code Laravel
├── frontend/           # Source code React + Vite + Tailwind
├── docker/             # Dockerfile dan konfigurasi
│   ├── php/            
│   ├── nginx/
│   └── frontend/
├── docker-compose.yml  # Main docker-compose
```

## ⚡ Cara Install & Menjalankan
### • Clone repository
```git clone https://github.com/RadidDesfandri/template-react-laravel.git```

### • Build & start container
```docker-compose up -d --build```

### • Akses aplikasi
- Frontend Dev (Vite): http://localhost:3000
- Backend (Laravel via Nginx): http://localhost:8080

### • Stop container
```docker-compose down```

## 🗃️ Masuk Container
### • Backend (Laravel / PHP-FPM)
Masuk kedalam container
```docker exec -it laravel_app sh```
#### Jalankan
```
php artisan migrate
composer install
```

### • Frontend (React / Vite)
```docker exec -it react_frontend sh```
#### Jalankan
```
npm install
```

### • Nginx
```
docker exec -it nginx_web sh
```

## 📇 Workflow Development
### • Frontend
Source code ada di folder frontend/ <br/>
Hot reload otomatis via Vite Dev Server di port 3000

### • Backend
Source code ada di folder backend/ <br/>
Bisa jalankan artisan command langsung di dalam container.
Akses API: ```http://localhost:8080/api```

## 💡 Tips
Jika ada perubahan di Dockerfile jalankan ulang dengan:
```docker-compose up -d --build```

Untuk melihat log service:
```
docker-compose logs -f app
docker-compose logs -f frontend
docker-compose logs -f web

```
