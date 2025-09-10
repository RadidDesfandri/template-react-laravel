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
### 1️⃣ Clone repository
```git clone https://github.com/RadidDesfandri/template-react-laravel.git```

### 2️⃣ Build & start container
```docker-compose up -d --build```

### 3️⃣ Akses aplikasi
- Frontend Dev (Vite): http://localhost:3000
- Backend (Laravel via Nginx): http://localhost:8080

### 4️⃣ Stop container
```docker-compose down```

