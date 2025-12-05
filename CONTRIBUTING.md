# 🤝 Panduan Kontribusi

Terima kasih atas minat Anda untuk berkontribusi pada proyek ini! Dengan mengikuti panduan ini, kita dapat memastikan kolaborasi yang lancar dan efektif.

## 🐛 Melaporkan Bug dan Mengajukan Fitur

Sebelum mengajukan *Issue* baru, silakan cari di *Issue* yang sudah ada untuk melihat apakah masalah atau fitur tersebut sudah dibahas.

* **Laporan Bug:** Gunakan template **Bug Report**. Jelaskan langkah-langkah untuk mereproduksi masalah, perilaku yang diharapkan, dan perilaku yang sebenarnya. Sertakan informasi *stack* (Podman/Docker/Node.js versi berapa yang Anda gunakan).
* **Permintaan Fitur (Feature Request):** Gunakan template **Feature Request**. Jelaskan fitur yang Anda inginkan, mengapa fitur itu penting, dan bagaimana itu akan digunakan.

## 💻 Melakukan Kontribusi Kode

Kami menggunakan alur kerja **Fork & Pull Request (PR)**.

1.  **Fork** repositori ini ke akun GitHub/GitLab Anda.
2.  **Clone** repositori yang sudah Anda *fork*:
    ```bash
    git clone [https://stackoverflow.com/questions/12338240/how-can-i-fork-the-original-repo-when-ive-already-forked-a-different-fork](https://stackoverflow.com/questions/12338240/how-can-i-fork-the-original-repo-when-ive-already-forked-a-different-fork)
    ```
3.  Buat **Branch Baru** untuk pekerjaan Anda:
    ```bash
    git checkout -b fitur/nama-fitur-anda
    # ATAU
    git checkout -b perbaikan/nama-perbaikan-bug
    ```
4.  Lakukan perubahan kode Anda. Pastikan untuk menjalankan tes lokal jika ada.
5.  **Format dan Linting Kode:**
    Kami menggunakan **Biome** untuk menjaga konsistensi kode. Pastikan kode Anda lolos pemeriksaan:
    ```bash
    npm run check 
    # (Ini menjalankan: npm run format && npm run lint)
    ```
    *Catatan: PR yang tidak lolos pemeriksaan Biome mungkin akan ditolak.*
6.  **Commit Perubahan Anda:** Gunakan pesan *commit* yang deskriptif. Contoh: `feat: Menambahkan middleware otorisasi` atau `fix: Memperbaiki endpoint metrik yang salah`.
7.  **Push** *branch* Anda ke *fork* Anda:
    ```bash
    git push origin nama-branch-anda
    ```
8.  Buka **Pull Request (PR)** dari *branch* di *fork* Anda ke *branch* utama di repositori ini.

### Petunjuk PR:

* Jelaskan secara singkat perubahan yang Anda buat.
* Jika PR menutup *issue* tertentu, tautkan dengan kata kunci seperti `Closes #123`.
* Jaga agar PR Anda sekecil dan sefokus mungkin.

## 🙏 Kode Etik

Harap diperhatikan bahwa proyek ini diatur oleh **Kode Etik**. Kami berkomitmen untuk menciptakan lingkungan yang ramah, aman, dan inklusif.

*Terima kasih sekali lagi atas kontribusi Anda!*
