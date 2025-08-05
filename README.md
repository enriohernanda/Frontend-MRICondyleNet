## MRICondyleNet

MRICondyleNet adalah aplikasi berbasis web untuk mendeteksi kondisi Temporomandibular Joint (TMJ) melalui citra MRI dengan bantuan model AI. Dibuat menggunakan Next.js dan Tailwind CSS, aplikasi ini memungkinkan pengguna untuk melakukan upload gambar, melihat prediksi, dan mengelola data dengan antarmuka yang interaktif dan modern.

🌐 Live Demo: https://mri-condyle-net.vercel.app

------------------------------------------------------------------

## 🚀 Teknologi yang Digunakan
- Next.js – Framework React untuk frontend
- Tailwind CSS – Utility-first CSS
- Backend API – Terhubung ke Flask API untuk inferensi model AI

------------------------------------------------------------------

## 🖼️ Fitur Utama
- Login dan Register menggunakan token autentikasi
- Upload gambar MRI
- Prediksi dan Visualisasi hasil AI
- Analytics dan Riwayat prediksi
- Dark Mode support

------------------------------------------------------------------

## 📂 Struktur Folder
app/
 main/ # Halaman utama: upload, prediction, visualize, dll
 auth/ # Login dan Register
 components/ # Navbar, Form, Card, dan UI lainnya
 layout/ # Layout dengan navbar global


------------------------------------------------------------------

## 🛠️ Cara Menjalankan di Lokal

1. **Clone repository**
   git clone https://github.com/enriohernanda/Frontend-MRI-Condyle-Net.git
   cd Frontend-MRI-Condyle-Net
2. **Install dependency**
   npm install
3. **Buat file .env.local**
   NEXT_PUBLIC_API_URL=http://localhost:5000
   Ganti URL sesuai dengan alamat backend Flask.
4. **Jalankan server**
   npm run dev
   Akses di browser: http://localhost:3000

   ------------------------------------------------------------------
