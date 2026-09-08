=== CATATAN UNTUK UPDATE INI ===
index.html sudah digabung dengan editan terbaru kamu (teks Inggris,
semester 5, endpoint Formspree asli, placeholder input, dll) TANPA
mengubah satupun editan kamu. Yang ditambahkan kembali hanya:
- Popup modal sukses/gagal kirim pesan (sempat hilang karena file
  yang kamu edit diambil dari versi sebelum modal ditambahkan)
- Elemen <p id="formStatus"> lama dihapus karena sudah digantikan modal

=== FOTO & GAMBAR PROYEK (UTAMA) ===
- img2.jpg, ecommerceweb.jpg, webportfolio.jpg, webportfolio-2.jpg,
  webaas.jpg, agrisure.jpg, keepzone.jpg, absensiweb.jpg, regis.jpg
- cv-faraj-muafa.pdf -> taruh di folder ROOT (sejajar index.html)
  Catatan: tombol "Download CV" di Home saat ini masih href="#",
  ganti ke path file CV kamu supaya tombolnya berfungsi.

=== GALERI FOTO TAMBAHAN PER PROYEK ===
Pola nama: namafile-2.jpg, namafile-3.jpg di project-detail.html.

=== LOGO EDUCATION JOURNEY ===
- logo-sma.png, logo-unsika.png, logo-himsika.png, logo-mandiri.png

=== FORM KONTAK -> EMAIL (FORMSPREE) ===
Endpoint Formspree kamu sudah terpasang: 
https://formspree.io/f/xwvdwjqo

=== POPUP SUKSES/GAGAL KIRIM PESAN ===
Sudah aktif kembali. Edit teks di js/main.js, cari "openMsgModal".
Edit warna/animasi di css/style.css, cari komentar
"CONTACT FORM SUCCESS/ERROR MODAL".

=== STRUKTUR FOLDER (WAJIB SEPERTI INI) ===
  portfolio/
  ├── css/style.css
  ├── js/main.js, project-detail-toggle.js, gallery-lightbox.js
  ├── images/*
  ├── index.html, about.html, projects.html, experience.html,
  │   project-detail.html

=== CATATAN KECIL (BUKAN SAYA UBAH, SEKADAR INFO) ===
- Ticker berjalan di Home masih tertulis "SEM. 4", sedangkan meta info
  dan code-visual sudah "Sem. 5" / semester: 5 -- kalau mau disamakan,
  cari "SI — SEM. 4" di index.html (ada 8 kemunculan dalam ticker-track).
- Beberapa link sosial (GitHub, LinkedIn, Twitter) sengaja diisi "#"
  -- ganti ke link asli kalau sudah siap.

=== CARA EDIT TEKS LAINNYA ===
Semua teks langsung di HTML, cari (Ctrl+F), edit, save.