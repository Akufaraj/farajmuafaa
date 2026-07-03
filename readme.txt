=== FOTO & GAMBAR PROYEK (UTAMA) ===
- img2.jpg, ecommerceweb.jpg, webportfolio.jpg, webaas.jpg, agrisure.jpg,
  keepzone.jpg, absensiweb.jpg, regis.jpg
- cv-faraj-muafa.pdf -> taruh di folder ROOT (sejajar index.html)

=== GALERI FOTO TAMBAHAN PER PROYEK ===
Pola nama: namafile-2.jpg, namafile-3.jpg (lihat detail-gallery-item
di project-detail.html). Bisa diklik untuk diperbesar (lightbox).

=== LOGO EDUCATION JOURNEY ===
- logo-sma.png, logo-unsika.png, logo-himsika.png, logo-mandiri.png

=== EDUCATION JOURNEY -- SEKARANG PAKAI GRADE/GPA BADGE (BARU) ===
Layout Education Journey diubah dari kotak persegi menjadi baris
memanjang penuh lebar, dan setiap baris punya badge nilai di pojok
kanan atas (warna gold/amber). Nilai contoh yang sudah diisi:
- SMA — IPA: 8.7 (rata-rata rapor)
- S1 Sistem Informasi: 3.75 (IPK)
- Organisasi Kemahasiswaan: A
- Belajar Mandiri: A

Untuk edit nilai, buka about.html, cari class "edu-grade" -- ada 4
baris <span class="edu-grade">...</span>, tinggal ganti angka/hurufnya
sesuai nilai asli kamu. Kalau salah satu entri tidak punya nilai resmi
(seperti organisasi), boleh diganti teks lain misal "Aktif" atau
dihapus saja tag <span>-nya.

=== PERBAIKAN KONTRAS WARNA (BARU) ===
Beberapa teks yang sebelumnya tidak terlihat di mode gelap sudah
diperbaiki supaya kontras tetap jelas di kedua mode (terang & gelap):
- Logo "FM." di pojok kiri atas
- Link "Selengkapnya tentang saya", "Lihat semua proyek",
  "Lihat semua pengalaman"

=== NAVBAR SKILLS ===
Link "Skills" sudah dihapus permanen dari navbar (atas & bawah) di
semua halaman. Section Skills sendiri (Bahasa Pemrograman/Tools/Area
Kerja + persentase) TETAP ADA di about.html, hanya tidak lagi bisa
diakses lewat menu navigasi.

=== STRUKTUR FOLDER (WAJIB SEPERTI INI) ===
  portfolio/
  ├── css/style.css
  ├── js/main.js, project-detail-toggle.js, gallery-lightbox.js
  ├── images/*
  ├── index.html, about.html, projects.html, experience.html,
  │   project-detail.html

=== FORM KONTAK -> EMAIL (FORMSPREE) ===
Buka index.html, cari "https://formspree.io/f/xwvdwjqo", ganti
dengan endpoint dari https://formspree.io

=== NOMOR WHATSAPP & EMAIL DI KONTAK ===
Sudah clickable -- WA langsung buka chat, email langsung buka mail app.

=== HOME "FEATURED WORK" -> CAROUSEL OTOMATIS ===
Bergulir otomatis, berhenti saat kursor diarahkan ke area carousel.
Edit di index.html, class "projects-carousel-track" (ingat: tiap
proyek ditulis 2x untuk animasi mulus, edit di kedua tempat).

=== EXPERIENCE -> JOURNEY THE ORGANIZATION ===
Section baru di experience.html: HIMSIKA (Divisi Edukasi, Departemen
Akademik) dan BLM (Anggota Komisi B). Cari komentar "JOURNEY THE
ORGANIZATION" untuk edit.

=== CARA EDIT TEKS LAINNYA ===
Semua teks langsung di HTML, cari (Ctrl+F), edit, save.