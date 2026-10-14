# Jelajah In-Progo — WebGIS Informasi Destinasi Wisata Kabupaten Kulon Progo

> WebGIS pariwisata untuk menampilkan persebaran destinasi wisata, pencarian lokasi, informasi fasilitas, navigasi, dan eksplorasi objek wisata di Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta.

**Nama proyek:** Jelajah In-Progo — WebGIS Informasi Destinasi Wisata Kabupaten Kulon Progo  
**Wilayah kajian:** Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta  
**Status:** Prototipe WebGIS  
**Frontend:** HTML, CSS, JavaScript  
**Peta interaktif:** Leaflet  
**Peta dasar:** OpenStreetMap  
**Pengelolaan kode:** GitHub  
**Hosting yang direncanakan:** GitHub Pages  
**Database yang direncanakan:** Supabase PostgreSQL  

---

## 1. Deskripsi Proyek

Jelajah In-Progo merupakan prototipe Sistem Informasi Geografis berbasis web yang dikembangkan untuk menyajikan informasi destinasi wisata di Kabupaten Kulon Progo secara interaktif dan spasial.

Aplikasi ini dirancang untuk membantu masyarakat dan wisatawan memperoleh informasi mengenai lokasi wisata, kategori destinasi, alamat, jam operasional, harga tiket masuk, serta ketersediaan fasilitas pendukung. Informasi tersebut ditampilkan melalui peta interaktif agar pengguna dapat mengenali persebaran destinasi wisata dan menentukan lokasi yang ingin dikunjungi.

Jelajah In-Progo mengintegrasikan data geografis dengan fitur pencarian destinasi, filter kategori, tampilan detail informasi wisata, dan penentuan lokasi berdasarkan koordinat. Pengembangan selanjutnya dapat mencakup navigasi menuju destinasi, geolokasi pengguna, pengelolaan data melalui database, serta fasilitas komunikasi dengan pengelola wisata apabila informasi kontak tersedia.

Aplikasi ini ditujukan sebagai media informasi pariwisata yang dapat diakses melalui browser. Informasi yang ditampilkan bergantung pada kelengkapan, ketepatan, dan pembaruan data yang tersedia.

## 2. Tujuan Pengembangan

1. Menampilkan persebaran destinasi wisata di Kabupaten Kulon Progo melalui peta interaktif.
2. Memudahkan pengguna mencari destinasi berdasarkan nama, kategori, dan lokasi.
3. Menyediakan informasi mengenai alamat, jam operasional, harga tiket, dan fasilitas wisata.
4. Membantu pengguna memahami lokasi destinasi berdasarkan wilayah administrasi.
5. Mendukung eksplorasi destinasi wisata melalui visualisasi spasial.
6. Menyediakan informasi kontak destinasi jika tersedia dan dapat dipublikasikan.
7. Mengembangkan sistem informasi wisata yang dapat diakses masyarakat secara daring.
8. Menyediakan dasar pengelolaan data wisata menggunakan Supabase PostgreSQL.

## 3. Fitur Utama

### 3.1 Halaman Pembuka dan Pengenalan Aplikasi

Halaman pembuka berfungsi sebagai pengantar sebelum pengguna mengakses peta utama Jelajah In-Progo.

Bagian ini dapat memuat:

- Nama dan identitas aplikasi.
- Deskripsi singkat tentang pariwisata Kulon Progo.
- Ilustrasi atau foto destinasi wisata.
- Tombol untuk mulai menjelajahi destinasi.
- Informasi singkat mengenai fungsi WebGIS.

Tampilan pembuka dirancang agar menarik, mudah dipahami, dan tetap responsif pada perangkat desktop maupun seluler.

### 3.2 Peta Interaktif

Peta merupakan komponen utama aplikasi yang digunakan untuk menampilkan lokasi destinasi wisata.

Pengguna dapat memperbesar dan memperkecil tampilan peta, menggeser area tampilan, serta memilih marker untuk melihat informasi destinasi.

Peta dikembangkan menggunakan Leaflet dengan OpenStreetMap sebagai peta dasar.

### 3.3 Persebaran Destinasi Wisata

Aplikasi dirancang untuk menampilkan lokasi wisata berdasarkan koordinat geografis yang tersedia dalam dataset.

Kategori destinasi dapat mencakup, sesuai data aktual:

- Wisata alam.
- Wisata pantai.
- Wisata budaya dan sejarah.
- Wisata buatan.
- Wisata edukasi.
- Kategori wisata lainnya.

Daftar kategori harus disesuaikan dengan klasifikasi yang benar-benar digunakan dalam dataset.

Setiap destinasi dapat direpresentasikan dengan marker pada peta. Marker dapat dibedakan berdasarkan kategori apabila implementasi menggunakan ikon atau simbol khusus.

### 3.4 Pencarian dan Filter Destinasi

Fitur pencarian membantu pengguna menemukan destinasi berdasarkan nama atau informasi yang tersedia.

Filter kategori memungkinkan pengguna membatasi destinasi yang ditampilkan pada peta. Filter tambahan berdasarkan kecamatan dapat diterapkan jika atribut wilayah telah tersedia dan konsisten.

Hasil pencarian ditampilkan dalam bentuk daftar atau marker pada peta sehingga pengguna dapat memilih destinasi yang sesuai dengan kebutuhannya.

### 3.5 Detail Informasi Destinasi

Setiap destinasi direncanakan memiliki halaman detail, popup, atau panel informasi yang memuat atribut wisata.

Atribut yang dapat ditampilkan meliputi:

- Nama wisata.
- Kategori wisata.
- Kecamatan.
- Desa atau kelurahan.
- Alamat.
- Koordinat longitude dan latitude.
- Jam operasional.
- Harga tiket masuk.
- Ketersediaan toilet.
- Ketersediaan musala.
- Ketersediaan tempat makan.
- Media sosial atau informasi kontak.
- Deskripsi destinasi.
- Foto destinasi.

Atribut yang tidak tersedia harus ditampilkan sebagai informasi yang belum tersedia, bukan diisi menggunakan perkiraan yang tidak terverifikasi.

### 3.6 Daftar Destinasi Wisata

Selain melalui peta, pengguna dapat menjelajahi destinasi dalam bentuk daftar atau kartu informasi.

Daftar tersebut dapat menampilkan nama destinasi, foto, kategori, wilayah administrasi, dan ringkasan informasi.

Ketika pengguna memilih salah satu destinasi, aplikasi dapat mengarahkan tampilan peta menuju lokasi terkait dan menampilkan detailnya.

### 3.7 Geolokasi Pengguna

Fitur geolokasi dapat digunakan untuk menunjukkan perkiraan posisi pengguna pada peta apabila pengguna memberikan izin lokasi melalui browser.

Posisi tersebut dapat membantu pengguna memahami letak dirinya terhadap destinasi wisata.

Ketelitian lokasi dipengaruhi oleh perangkat, sensor, kondisi lingkungan, dan izin browser. Jika pengguna menolak akses lokasi, fungsi pencarian destinasi tetap perlu dapat digunakan.

### 3.8 Navigasi Menuju Destinasi

Fitur navigasi dapat dikembangkan untuk membantu pengguna memperoleh petunjuk perjalanan menuju destinasi wisata.

Implementasi dapat menggunakan layanan routing eksternal atau tautan navigasi ke layanan peta yang tersedia.

Jarak dan waktu perjalanan hanya dapat ditampilkan jika layanan yang digunakan menyediakan informasi tersebut. Hasilnya merupakan estimasi yang dipengaruhi jaringan jalan dan konfigurasi layanan, bukan jaminan kondisi perjalanan secara langsung.

### 3.9 Fasilitas dan Informasi Kontak

Informasi fasilitas membantu pengguna mengetahui ketersediaan sarana pendukung di suatu destinasi.

Jika nomor telepon atau kontak pengelola tersedia dan telah diverifikasi, aplikasi dapat menyediakan tautan untuk menghubungi pihak terkait.

Ketersediaan fasilitas dan kontak perlu diperbarui berdasarkan sumber yang dapat dipercaya.

### 3.10 Integrasi Database

Supabase PostgreSQL direncanakan sebagai tempat penyimpanan data destinasi wisata agar pengelolaan data lebih terstruktur.

Setelah integrasi diterapkan, aplikasi dapat mengambil data dari database tanpa harus selalu mengganti dataset secara manual.

Integrasi ini memerlukan konfigurasi koneksi, skema tabel, kebijakan akses, serta penyesuaian kode pemuatan data.

---

## 4. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML5 | Menyusun struktur halaman WebGIS |
| CSS3 | Mengatur tampilan, tata letak, animasi, dan responsivitas |
| JavaScript | Menjalankan interaksi dan logika aplikasi |
| Leaflet | Menampilkan peta interaktif dan marker destinasi |
| OpenStreetMap | Menyediakan peta dasar |
| GeoJSON | Menyimpan dan menyajikan data geografis |
| JSON | Menyimpan data wisata terstruktur |
| CSV | Menyediakan data tabular untuk proses impor |
| GitHub | Mengelola versi kode dan berkas proyek |
| GitHub Pages | Menyajikan aplikasi statis secara daring |
| Supabase PostgreSQL | Rancangan database untuk data destinasi wisata |

Layanan routing, autentikasi, dan geolokasi tambahan hanya tersedia jika telah dikonfigurasi dan diuji pada aplikasi.

## 5. Struktur Direktori Proyek

Struktur berikut merupakan contoh susunan berkas yang dapat digunakan. Nama dan lokasi file perlu disesuaikan dengan repository aktual.

```text
Jelajah-In-Progo-WebGIS/
├── index.html
├── style.css
├── script.js
├── Data Wisata Kulon Progo.csv
├── data/
│   └── destinasi_wisata.geojson
├── assets/
│   ├── images/
│   └── icons/
├── README.md
└── .nojekyll
```

Keterangan:

- `index.html`: struktur halaman pembuka, peta, daftar destinasi, dan detail wisata.
- `style.css`: tampilan visual, warna, tipografi, tata letak, dan responsivitas.
- `script.js`: logika peta, pencarian, filter, marker, dan pemuatan data.
- `Data Wisata Kulon Progo.csv`: dataset tabular destinasi wisata yang digunakan sebagai sumber data.
- `data/destinasi_wisata.geojson`: data spasial destinasi dalam format GeoJSON jika tersedia atau telah dibuat.
- `assets/images/`: foto dan ilustrasi destinasi wisata.
- `assets/icons/`: ikon kategori wisata dan elemen antarmuka.
- `README.md`: dokumentasi proyek.
- `.nojekyll`: file opsional untuk menonaktifkan pemrosesan Jekyll pada GitHub Pages.

Struktur aktual repository harus diperiksa sebelum memindahkan file. Jangan mengubah lokasi dataset tanpa menyesuaikan path yang digunakan dalam JavaScript.

## 6. Dokumentasi Fungsi Setiap Script

### 6.1 `index.html`

File `index.html` merupakan kerangka utama antarmuka Jelajah In-Progo.

Bagian yang dapat diatur di dalamnya meliputi:

- Halaman pembuka dan pengenalan aplikasi.
- Navigasi utama.
- Kontainer peta Leaflet.
- Kolom pencarian destinasi.
- Filter kategori dan kecamatan.
- Daftar kartu destinasi.
- Popup atau panel detail wisata.
- Tombol lokasi pengguna.
- Tombol navigasi atau petunjuk perjalanan.
- Pemanggilan file CSS dan JavaScript.

HTML bertanggung jawab atas struktur halaman. Pemrosesan data, pembuatan marker, dan interaksi peta dilakukan oleh JavaScript.

### 6.2 `style.css`

File `style.css` bertanggung jawab atas tampilan visual aplikasi.

Fungsi utamanya meliputi:

- Mengatur identitas visual Jelajah In-Progo.
- Menentukan warna, tipografi, dan hierarki informasi.
- Mengatur tata letak halaman pembuka dan peta.
- Mendesain kartu informasi destinasi.
- Mengatur tampilan pencarian dan filter.
- Mengatur popup dan panel detail.
- Menambahkan animasi yang mendukung pengalaman pengguna.
- Mengoptimalkan tampilan pada desktop dan perangkat seluler.

Perubahan CSS perlu diuji agar panel tidak menutupi peta secara berlebihan dan seluruh tombol tetap mudah digunakan.

### 6.3 `script.js`

File `script.js` menjalankan logika dan interaksi utama aplikasi. Nama fungsi spesifik perlu mengikuti fungsi yang benar-benar ada di dalam kode aktual.

#### A. Inisialisasi peta

Tanggung jawab:

- Membuat objek peta Leaflet.
- Menentukan pusat peta dan zoom awal.
- Menambahkan peta dasar OpenStreetMap.
- Menyiapkan layer destinasi wisata.
- Menyiapkan kontrol peta yang diperlukan.

#### B. Pemuatan data wisata

Tanggung jawab:

- Mengambil data dari CSV, JSON, GeoJSON, atau Supabase.
- Membaca atribut destinasi.
- Memastikan koordinat tersedia dan valid.
- Menangani kegagalan pemuatan data.
- Menyediakan data untuk proses pencarian, filter, dan pembuatan marker.

Jika data diambil menggunakan `fetch()`, aplikasi sebaiknya dijalankan melalui server lokal atau hosting HTTPS.

#### C. Pengolahan marker destinasi

Tanggung jawab:

- Membaca koordinat setiap destinasi.
- Membuat marker menggunakan Leaflet.
- Menggunakan ikon sesuai kategori apabila tersedia.
- Menampilkan popup nama dan ringkasan destinasi.
- Menghubungkan marker dengan panel detail.
- Mengelola marker berdasarkan filter yang dipilih.

Pada Leaflet, koordinat marker menggunakan urutan latitude terlebih dahulu, kemudian longitude. Urutan ini berbeda dari koordinat Point dalam GeoJSON yang menggunakan longitude kemudian latitude.

#### D. Pencarian destinasi

Tanggung jawab:

- Membaca kata kunci dari pengguna.
- Mencocokkan kata kunci dengan nama atau atribut yang relevan.
- Menampilkan hasil pencarian.
- Mengarahkan peta menuju destinasi yang dipilih.
- Menampilkan pesan jika tidak ada hasil yang sesuai.

#### E. Filter kategori dan wilayah

Tanggung jawab:

- Menyaring destinasi berdasarkan kategori.
- Menyaring destinasi berdasarkan kecamatan jika atribut tersedia.
- Memperbarui marker yang ditampilkan.
- Memperbarui daftar destinasi.
- Menjaga konsistensi antara hasil filter dan informasi pada peta.

#### F. Tampilan detail destinasi

Tanggung jawab:

- Menampilkan informasi destinasi yang dipilih.
- Menampilkan foto jika tersedia.
- Menampilkan kategori dan wilayah administrasi.
- Menampilkan jam operasional serta harga tiket jika diketahui.
- Menampilkan fasilitas dan informasi kontak jika tersedia.
- Menangani atribut kosong dengan tampilan yang informatif.

#### G. Geolokasi pengguna

Tanggung jawab:

- Meminta izin lokasi browser.
- Membaca posisi perangkat.
- Menampilkan posisi pengguna pada peta.
- Menangani izin yang ditolak atau kegagalan memperoleh lokasi.
- Menggunakan posisi pengguna sebagai titik awal navigasi apabila fitur tersebut telah diterapkan.

#### H. Navigasi dan estimasi perjalanan

Jika dikonfigurasi, bagian ini bertanggung jawab untuk:

- Menentukan titik awal dan tujuan.
- Memanggil layanan routing.
- Menampilkan jalur perjalanan pada peta.
- Menampilkan jarak dan waktu perjalanan jika tersedia.
- Menangani kegagalan permintaan rute.
- Menghapus rute ketika pengguna membatalkan navigasi.

Fitur ini memerlukan layanan routing yang sesuai dan tidak otomatis tersedia hanya karena aplikasi menggunakan Leaflet.

#### I. Halaman pembuka dan navigasi antarmuka

Tanggung jawab:

- Menampilkan halaman pengenalan.
- Mengatur perpindahan menuju peta utama.
- Menangani tombol navigasi antarmuka.
- Mengatur visibilitas panel pencarian, daftar destinasi, dan detail wisata.

#### J. Penanganan kesalahan

Bagian ini menangani kemungkinan masalah seperti:

- Data wisata gagal dimuat.
- Koordinat tidak valid.
- Foto tidak tersedia.
- Elemen HTML tidak ditemukan.
- Layanan routing tidak merespons.
- Akses geolokasi ditolak.
- Query Supabase gagal jika integrasi database sudah diterapkan.

Pesan kesalahan sebaiknya mudah dipahami pengguna, sedangkan informasi teknis dapat dicatat pada console browser untuk membantu proses debugging.

---

## 7. Format Data Destinasi Wisata

### 7.1 Struktur Atribut

Dataset Jelajah In-Progo dirancang untuk memuat atribut berikut, sesuai ketersediaan data:

| Atribut | Keterangan |
|---|---|
| `id` | Identitas unik destinasi |
| `nama_wisata` | Nama destinasi wisata |
| `kategori_wisata` | Kategori destinasi |
| `kecamatan` | Kecamatan lokasi destinasi |
| `desa` | Desa atau kelurahan lokasi destinasi |
| `alamat` | Alamat atau keterangan lokasi |
| `longitude` | Koordinat bujur |
| `latitude` | Koordinat lintang |
| `jam_operasional` | Jam buka dan tutup |
| `tiket_masuk` | Informasi harga tiket |
| `toilet` | Ketersediaan toilet |
| `mushola` | Ketersediaan musala |
| `tempat_makan` | Ketersediaan tempat makan |
| `media_sosial` | Tautan media sosial |
| `deskripsi` | Informasi mengenai destinasi |
| `foto` | URL atau path foto destinasi |

Nama kolom database perlu disesuaikan dengan header dataset aktual. Jika header CSV berbeda, lakukan pemetaan kolom saat impor atau pada kode pemrosesan data.

### 7.2 GeoJSON

GeoJSON dapat digunakan untuk menyimpan lokasi wisata sebagai fitur geografis beserta atributnya.

Contoh berikut hanya menunjukkan struktur data:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "nama_wisata": "Contoh Destinasi",
        "kategori_wisata": "Wisata Alam",
        "kecamatan": "Contoh Kecamatan",
        "desa": "Contoh Desa"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.15,
          -7.85
        ]
      }
    }
  ]
}
```

Koordinat di atas merupakan ilustrasi format, bukan koordinat terverifikasi untuk destinasi tertentu di Kulon Progo.

Dalam GeoJSON, urutan koordinat Point adalah longitude kemudian latitude.

### 7.3 Validasi Data

Sebelum data digunakan, lakukan pemeriksaan terhadap:

- Kelengkapan nama destinasi.
- Konsistensi kategori.
- Kesesuaian kecamatan dan desa.
- Validitas longitude dan latitude.
- Data duplikat.
- Kelengkapan foto dan informasi fasilitas.
- Sumber data dan tanggal pembaruan.

Koordinat yang kosong atau tidak valid sebaiknya tidak digunakan untuk membuat marker sampai data diperbaiki.

---

## 8. Menjalankan Aplikasi Secara Lokal

### Langkah 1 — Siapkan berkas

Pastikan file HTML, CSS, JavaScript, dan dataset tersedia sesuai struktur direktori.

### Langkah 2 — Buka folder proyek

Buka folder Jelajah In-Progo melalui Visual Studio Code.

### Langkah 3 — Jalankan server lokal

Gunakan ekstensi Live Server atau jalankan perintah berikut dari terminal pada direktori proyek jika Python tersedia:

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

Server lokal membantu pengujian pemanggilan dataset melalui HTTP.

### Langkah 4 — Uji fitur

Periksa apakah peta muncul, marker tampil, pencarian bekerja, filter sesuai, serta panel informasi menampilkan data yang benar.

---

## 9. Hosting Menggunakan GitHub Pages

GitHub Pages dapat digunakan untuk menerbitkan Jelajah In-Progo sebagai aplikasi web statis.

### Langkah 1 — Unggah kode

Pastikan `index.html`, `style.css`, `script.js`, dan file pendukung berada di repository GitHub.

### Langkah 2 — Periksa path berkas

Nama file dan path dataset harus sesuai dengan yang digunakan dalam kode. Perhatikan huruf besar dan kecil pada nama berkas.

### Langkah 3 — Aktifkan GitHub Pages

1. Buka repository proyek.
2. Masuk ke menu **Settings**.
3. Pilih **Pages**.
4. Pilih sumber deployment yang sesuai, misalnya branch `main` dan folder root jika file `index.html` berada di direktori utama.
5. Simpan konfigurasi dan tunggu deployment selesai.

### Langkah 4 — Uji aplikasi daring

Periksa halaman pembuka, peta, marker, foto, pencarian, filter, serta detail destinasi melalui URL GitHub Pages.

GitHub Pages hanya menyajikan frontend statis. Database dan layanan backend tetap perlu disediakan oleh layanan terpisah, seperti Supabase.

---

## 10. Rancangan Integrasi Supabase PostgreSQL

### 10.1 Tujuan Integrasi

Supabase direncanakan sebagai database untuk menyimpan data destinasi wisata Jelajah In-Progo.

Dengan integrasi ini, data wisata dapat dikelola secara terstruktur. Jika nantinya tersedia antarmuka pengelola, data dapat diperbarui melalui proses yang diizinkan tanpa harus mengganti seluruh file dataset secara manual.

### 10.2 Arsitektur yang Direncanakan

```text
Pengguna
   |
   v
Frontend Jelajah In-Progo
HTML, CSS, JavaScript, Leaflet
   |
   v
Supabase JavaScript Client
   |
   v
Supabase PostgreSQL
   |
   v
Data destinasi wisata
```

Frontend mengambil data melalui API Supabase berdasarkan kebijakan akses yang dikonfigurasi.

### 10.3 Rancangan Tabel `destinasi_wisata`

Berikut contoh skema tabel yang sesuai dengan atribut utama proyek:

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | bigint | Identitas destinasi |
| `nama_wisata` | text | Nama destinasi |
| `kategori_wisata` | text | Kategori wisata |
| `kecamatan` | text | Kecamatan |
| `desa` | text | Desa atau kelurahan |
| `alamat` | text | Alamat destinasi |
| `longitude` | double precision | Bujur |
| `latitude` | double precision | Lintang |
| `jam_operasional` | text | Jam operasional |
| `tiket_masuk` | text | Informasi harga tiket |
| `toilet` | text | Informasi toilet |
| `mushola` | text | Informasi musala |
| `tempat_makan` | text | Informasi tempat makan |
| `media_sosial` | text | Tautan media sosial |
| `deskripsi` | text | Deskripsi destinasi |
| `foto` | text | URL atau path foto |

Tipe data perlu disesuaikan dengan format CSV yang digunakan. Kolom harga tiket dapat memakai tipe numerik jika nilainya sudah dinormalisasi sebagai angka; jika nilainya berupa keterangan seperti "gratis" atau "hubungi pengelola", tipe `text` lebih fleksibel.

### 10.4 Contoh SQL Pembuatan Tabel

SQL berikut dapat dijalankan melalui SQL Editor Supabase setelah skema ditinjau:

```sql
create table public.destinasi_wisata (
  id bigint generated by default as identity primary key,
  nama_wisata text not null,
  kategori_wisata text,
  kecamatan text,
  desa text,
  alamat text,
  longitude double precision,
  latitude double precision,
  jam_operasional text,
  tiket_masuk text,
  toilet text,
  mushola text,
  tempat_makan text,
  media_sosial text,
  deskripsi text,
  foto text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint destinasi_latitude_valid
    check (
      latitude is null or
      (latitude >= -90 and latitude <= 90)
    ),

  constraint destinasi_longitude_valid
    check (
      longitude is null or
      (longitude >= -180 and longitude <= 180)
    )
);

create index destinasi_kategori_idx
  on public.destinasi_wisata(kategori_wisata);

create index destinasi_kecamatan_idx
  on public.destinasi_wisata(kecamatan);
```

SQL ini merupakan rancangan awal. Sebelum mengimpor CSV, cocokkan nama kolom, tipe data, dan identitas setiap baris agar proses impor tidak menghasilkan data yang keliru atau duplikat.

### 10.5 Keamanan Database

Sebelum frontend terhubung ke Supabase, tentukan aturan akses:

- Pengunjung dapat membaca informasi wisata yang memang bersifat publik.
- Penambahan destinasi dibatasi kepada pengelola yang berwenang.
- Pengubahan koordinat dan informasi fasilitas tidak boleh dilakukan oleh pengguna umum tanpa izin.
- Penghapusan data dibatasi kepada peran yang memiliki hak tersebut.

Row Level Security (RLS) dan kebijakan akses perlu dikonfigurasi sesuai kebutuhan. Mengaktifkan RLS tanpa membuat kebijakan baca yang sesuai dapat menyebabkan query dari frontend tidak mengembalikan data.

Gunakan publishable key untuk koneksi frontend dengan kebijakan akses yang benar. Jangan pernah memasukkan secret key atau `service_role` key ke JavaScript publik atau repository GitHub.

### 10.6 Contoh Koneksi Supabase

Contoh berikut merupakan pola koneksi dasar untuk JavaScript berbasis browser:

```javascript
import { createClient } from
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL =
  'https://PROJECT_ID.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'YOUR_SUPABASE_PUBLISHABLE_KEY';

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

async function loadDestinasiWisata() {
  const { data, error } = await supabase
    .from('destinasi_wisata')
    .select('*')
    .order('nama_wisata');

  if (error) {
    console.error(
      'Gagal mengambil data wisata:',
      error.message
    );

    return [];
  }

  return data ?? [];
}
```

Sebelum menggunakan contoh tersebut, buat project Supabase, buat tabel, atur kebijakan akses, lalu masukkan URL dan publishable key yang benar.

Jika kode menggunakan `import`, pastikan script HTML dimuat sebagai modul. Fungsi pemuatan data juga perlu dihubungkan dengan proses pembuatan marker Leaflet agar data yang diambil benar-benar muncul pada peta.

### 10.7 Tahapan Migrasi Data

1. Memeriksa struktur CSV data wisata.
2. Membersihkan nama kolom dan nilai atribut.
3. Memvalidasi koordinat destinasi.
4. Membuat tabel `destinasi_wisata` di Supabase.
5. Mengimpor data dan memeriksa hasilnya.
6. Mengatur RLS dan kebijakan akses.
7. Menghubungkan frontend ke Supabase.
8. Menyesuaikan fungsi pemuatan data.
9. Menghubungkan data dengan marker dan daftar destinasi.
10. Menguji fitur serta mencatat prosedur pembaruan data.

---

## 11. Pengembangan Database Lanjutan

Jika kebutuhan aplikasi berkembang, beberapa tabel tambahan dapat dipertimbangkan.

### 11.1 Tabel `kategori_wisata`

Dapat digunakan untuk menyimpan daftar kategori secara terstruktur agar penamaan kategori konsisten.

### 11.2 Tabel `ulasan_wisata`

Dapat dipertimbangkan jika aplikasi nantinya memiliki fitur ulasan pengguna. Implementasinya memerlukan validasi, moderasi, dan kebijakan perlindungan data.

### 11.3 Tabel `pengelola_wisata`

Dapat digunakan untuk mengelola informasi pengelola destinasi yang relevan dan telah memperoleh izin untuk dipublikasikan.

### 11.4 Autentikasi Pengelola

Supabase Auth dapat digunakan untuk membatasi akses ke panel admin sehingga hanya pengguna yang berwenang dapat menambah atau memperbarui informasi destinasi.

Fitur ini membutuhkan implementasi autentikasi, antarmuka pengelolaan, serta kebijakan akses database yang tepat.

---

## 12. Pengujian dan Validasi

### A. Data spasial

- Koordinat berada dalam rentang yang valid.
- Urutan koordinat sesuai format GeoJSON atau Leaflet.
- Tidak ada data destinasi duplikat yang tidak disengaja.
- Nama dan kategori konsisten.
- Kecamatan dan desa sesuai dengan sumber data.
- Informasi fasilitas memiliki sumber yang dapat ditelusuri.

### B. Fungsionalitas

- Halaman pembuka dapat dilalui menuju peta utama.
- Peta dasar tampil.
- Marker destinasi muncul pada lokasi yang benar.
- Pencarian dan filter memberikan hasil yang sesuai.
- Panel detail menampilkan atribut yang benar.
- Geolokasi menangani izin yang ditolak.
- Navigasi menampilkan hasil jika layanan tersedia.
- Kegagalan pemuatan data tidak merusak seluruh antarmuka.
- Data Supabase dapat dibaca sesuai kebijakan akses jika integrasi telah diterapkan.

### C. Deployment

- Halaman dapat dibuka melalui GitHub Pages.
- Seluruh aset menggunakan path yang benar.
- Dataset berhasil dimuat dari lokasi yang sesuai.
- Foto dan ikon tidak rusak.
- Tidak ada secret key dalam repository publik.
- Tidak terdapat kesalahan JavaScript kritis.

### D. Validasi informasi wisata

Informasi lokasi, harga tiket, jam operasional, fasilitas, dan kontak perlu diverifikasi dari sumber yang dapat dipercaya. Data yang belum diverifikasi sebaiknya diberi keterangan bahwa informasi belum tersedia atau perlu dikonfirmasi.

---

## 13. Permasalahan Umum

### Peta tidak muncul

Periksa pemanggilan Leaflet, koneksi internet, kontainer peta, serta tinggi dan lebar elemen peta.

### Marker tidak muncul

Periksa pemuatan dataset, struktur atribut, urutan koordinat, dan pesan kesalahan di console browser.

### Data tidak tampil di GitHub Pages

Pastikan nama file, huruf besar-kecil, dan path sesuai. Periksa apakah berkas berada di direktori utama atau subdirektori.

### Foto destinasi tidak muncul

Periksa URL foto, path relatif, ekstensi berkas, serta apakah gambar dapat diakses dari browser.

### Pencarian dan filter tidak sesuai

Periksa konsistensi penulisan nama kategori, nilai atribut, dan logika filter pada JavaScript.

### Supabase gagal mengembalikan data

Periksa URL project, publishable key, nama tabel, struktur kolom, RLS, kebijakan akses, dan hak akses query.

### Navigasi tidak berfungsi

Pastikan layanan routing telah dikonfigurasi, format koordinat benar, serta layanan dapat diakses.

---

## 14. Batasan Sistem

1. Jelajah In-Progo merupakan prototipe WebGIS informasi pariwisata.
2. Kelengkapan informasi bergantung pada dataset yang tersedia.
3. Ketepatan posisi destinasi bergantung pada validitas koordinat.
4. Informasi jam operasional, harga tiket, dan fasilitas dapat berubah.
5. Navigasi memerlukan layanan pendukung jika ingin menampilkan rute dan estimasi waktu perjalanan.
6. Geolokasi bergantung pada perangkat serta izin browser.
7. Supabase baru berfungsi setelah integrasi diterapkan dan diuji.
8. GitHub Pages hanya menyajikan frontend statis, bukan database atau backend.
9. Informasi destinasi perlu diperbarui dan diverifikasi secara berkala.

---

## 15. Rencana Pengembangan

Pengembangan selanjutnya dapat mencakup:

- Integrasi Supabase untuk pengelolaan data wisata.
- Impor dan validasi dataset secara terstruktur.
- Panel admin untuk memperbarui informasi destinasi.
- Filter berdasarkan kategori dan kecamatan.
- Pengembangan detail destinasi yang lebih informatif.
- Integrasi tautan navigasi.
- Penyempurnaan tampilan pada perangkat seluler.
- Penambahan fitur kontak pengelola.
- Pengujian kegunaan pada pengguna.
- Dokumentasi sumber data dan prosedur pembaruan.

---

## 16. Referensi Dokumentasi

- Leaflet: https://leafletjs.com/reference.html
- OpenStreetMap: https://www.openstreetmap.org/
- GeoJSON: https://geojson.org/
- GitHub Pages: https://docs.github.com/en/pages
- Supabase JavaScript: https://supabase.com/docs/reference/javascript/introduction
- Supabase Database: https://supabase.com/docs/guides/database/overview
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security

---

## 17. Penutup

Jelajah In-Progo dikembangkan sebagai prototipe WebGIS yang menyediakan informasi destinasi wisata di Kabupaten Kulon Progo melalui peta interaktif. Integrasi data spasial dengan fitur pencarian, filter kategori, dan informasi detail destinasi diharapkan dapat mempermudah masyarakat dan wisatawan dalam mengenali potensi pariwisata daerah.

Pengembangan lebih lanjut dapat dilakukan melalui integrasi Supabase PostgreSQL, penyempurnaan visualisasi, dan penambahan fitur pendukung perjalanan. Validasi koordinat, pembaruan informasi, serta pengelolaan akses database menjadi bagian penting untuk menjaga kualitas dan keamanan aplikasi.

**Jelajah In-Progo — Jelajahi Destinasi, Temukan Pengalaman.**
