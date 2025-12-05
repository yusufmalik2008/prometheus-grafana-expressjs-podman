# 🚀 Prometheus, Grafana, & Express.js Monitoring Stack (Podman Compose)

Sebuah proyek *hobby* untuk mendemonstrasikan setup *monitoring* lengkap:
* Aplikasi backend **Express.js** yang diekspos metriknya.
* **Prometheus** untuk mengumpulkan metrik secara periodik.
* **Grafana** untuk memvisualisasikan data metrik.
* Digunakan bersama **Podman Compose** untuk orkestrasi kontainer.
* **Biome** digunakan untuk *code formatting* dan *linting*.

Lihat demo langsung:
* **Homepage Proyek:** [https://prometheus-grafana-expressjs-podman.vercel.app/](https://prometheus-grafana-expressjs-podman.vercel.app/) (Pengantar)
* **Dashboard Prometheus:** [https://prometheus-grafana-expressjs-podman.vercel.app/dashboard](https://prometheus-grafana-expressjs-podman.vercel.app/dashboard) (Membutuhkan akses yang sesuai)
* **Endpoint Metrik:** [https://prometheus-grafana-expressjs-podman.vercel.app/metrics](https://prometheus-grafana-expressjs-podman.vercel.app/metrics) (Metrik aplikasi)

---

## 🛠️ Stack Teknologi

| Komponen | Deskripsi |
| :--- | :--- |
| **Backend** | Express.js (Node.js) |
| **Code Quality** | Biome (Formatter & Linter) |
| **Monitoring** | Prometheus |
| **Visualisasi** | Grafana |
| **Kontainerisasi** | Podman & Podman Compose (Alternatif Docker Compose) |

---

## 🏁 Memulai Proyek (Getting Started)

Anda memiliki dua opsi untuk menjalankan proyek ini: menggunakan **Podman Compose** (direkomendasikan untuk meniru lingkungan produksi *containerized*) atau menjalankan **Express.js** secara *native* dan layanan monitoring melalui Vercel.

### Opsi 1: Menggunakan Podman Compose (Full Stack)

Pastikan Anda telah menginstal **Podman** dan **Podman Compose** (atau **Docker Compose** sebagai alternatif).

1.  **Clone repositori:**
    ```bash
    git clone [https://www.andarepository.com/](https://www.andarepository.com/)
    cd [NAMA REPO]
    ```

2.  **Jalankan layanan:**
    Gunakan `podman-compose` atau `docker-compose` (jika Anda tidak menggunakan Podman):
    ```bash
    podman compose up -d
    # ATAU
    # docker-compose up -d 
    ```

3.  **Akses Aplikasi:**
    * **Express.js (Aplikasi Anda):** `http://localhost:3000`
    * **Prometheus:** `http://localhost:9090`
    * **Grafana:** `http://localhost:3001` (Default login: `admin`/`admin`)

    Metrik Express.js dapat diakses di `http://localhost:3000/metrics`. Prometheus akan secara otomatis *scrape* metrik dari alamat ini.

4.  **Menghentikan layanan:**
    ```bash
    podman compose down
    # ATAU
    # docker-compose down
    ```

### Opsi 2: Hanya Aplikasi Express.js (Development)

Untuk pengembangan lokal dan *debugging* cepat tanpa layanan monitoring:

1.  **Instal dependensi:**
    ```bash
    npm install
    ```

2.  **Jalankan mode pengembangan:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

---

## ⚙️ Skrip Penting (NPM Scripts)

| Skrip | Perintah | Deskripsi |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Menjalankan aplikasi Express.js dalam mode pengembangan (nodemon). |
| `start` | `npm start` | Menjalankan aplikasi Express.js dalam mode produksi. |
| `format` | `npx biome format . --write` | Melakukan *formatting* kode menggunakan Biome. |
| `lint` | `npx biome lint .` | Melakukan *linting* kode menggunakan Biome. |
| `check` | `npm run format && npm run lint` | Menjalankan *formatting* dan *linting*. |

---

## 🤝 Kontribusi

Kami menerima kontribusi! Silakan baca **CONTRIBUTING.md** untuk panduan lebih lanjut.
