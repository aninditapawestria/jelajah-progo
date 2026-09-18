# Jelajah-In Progo — WebGIS Wisata Kulon Progo

WebGIS ini dibuat dengan:
- Python standard library
- HTML
- CSS
- JavaScript
- Leaflet.js
- OpenStreetMap

Data wisata dibaca langsung dari:
`data/Data Wisata Kulon Progo.csv`

## Cara menjalankan

1. Extract ZIP.
2. Buka folder project di Visual Studio Code.
3. Buka Terminal.
4. Jalankan:

```bash
python server.py
```

Jika Windows tidak mengenali `python`, gunakan:

```bash
py server.py
```

5. Buka:

```text
http://localhost:8000
```

## Struktur

```text
Jelajah-In-Progo-WebGIS/
├── index.html
├── style.css
├── script.js
├── server.py
├── README.md
├── assets/
└── data/
    └── Data Wisata Kulon Progo.csv
```

## Fitur

- Landing page bergaya portfolio/travel.
- Statistics berdasarkan CSV.
- Daftar kategori otomatis.
- Tabel lokasi.
- Peta Leaflet.
- Marker seluruh data berkoordinat.
- Popup.
- Search.
- Filter kategori.
- Detail destinasi.
- Tombol Lihat Rute.
- Responsive desktop/mobile.

## Catatan data

CSV dibaca dengan encoding `cp1252` karena file sumber bukan UTF-8.

Spasi tambahan pada nilai kategori hanya dinormalisasi ketika proses filter/tampilan. Isi CSV asli tidak diubah.

Tidak ada data wisata dummy yang ditambahkan.

## Catatan internet

Leaflet, font Google, Font Awesome, dan tile OpenStreetMap dipanggil dari internet. Jadi koneksi internet diperlukan ketika website dijalankan.

## Jika ingin memakai foto

Kolom `foto` pada CSV saat ini tidak berisi path gambar yang dapat langsung dipanggil sebagai file lokal. Karena itu project tidak membuat foto destinasi palsu. Jika nanti Anda memiliki folder foto asli, kolom `foto` dapat dihubungkan ke file tersebut.
