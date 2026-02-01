## 📖 Panduan Pengguna

### 1. 🛒 Menu Kasir
Halaman utama untuk transaksi harian.
- **Cari Barang**: Ketik nama barang di kotak pencarian atas. Daftar pilihan barang akan muncul otomatis.
    - *Tips*: Klik barang dari daftar untuk mengisi harga otomatis dan set Jumlah = 1.
- **Tambah ke Keranjang**: Masukkan Jumlah (Qty) dan Harga (jika belum ada), lalu klik "Tambah ke Keranjang" (atau tekan Enter di kolom Harga).
- **Kelola Keranjang**: Lihat daftar belanjaan di bawah tombol. Klik "Hapus" jika ingin membatalkan barang.
- **Pembayaran**:
    - Lihat "Total Tagihan".
    - Isi kolom "Bayar". Nilai "Kembali" akan dihitung otomatis.
- **Cetak Struk**: Klik tombol "Cetak Struk" untuk mencetak struk belanja yang rapi dan siap untuk printer thermal.

### 2. ⚙️ Menu Admin
Halaman untuk mengelola stok barang toko.
- **Ganti Halaman**: Klik tab "ADMIN" di bagian atas.
- **Input Barang Baru**:
    - Isi **Nama Barang**, **Harga Beli**, dan **Harga Jual**.
    - Klik "Simpan Barang".
- **Daftar Barang**: Lihat semua barang yang sudah tersimpan. Klik ikon sampah (🗑️) untuk menghapus barang.

---

# Simple POS (Point of Sale) Application

A simple, lightweight Point of Sale application built for UMKM (Micro, Small, and Medium Enterprises). Designed for speed, reliability, and ease of use, utilizing Cloudflare's edge network for high performance.

---

### Tech Stack
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) (Serverless edge computing).
- **Framework**: [Hono.js](https://hono.dev/) (Fast, lightweight web framework).
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/) (Serverless SQL database).
- **Frontend**: Vanilla HTML/JS + [Tailwind CSS](https://tailwindcss.com/) (via CDN).
- **Architecture**: Single Page Application (SPA) with Optimistic UI for instant feedback.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.13.0 or later).
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

### Installation

1.  **Clone the repository** (or download source):
    ```bash
    git clone <repository-url>
    cd pos-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Login to Cloudflare** (required for deployment and D1 access):
    ```bash
    npx wrangler login
    ```

### Local Development
To run the app locally using the remote database (recommended for consistency with production data):

```bash
npm run dev
```
*Access the app at `http://localhost:8787`*

**Note**: The project is configured to use the **Remote D1 Database** even during local development. Ensure you have internet access.

### Deployment
To deploy your changes to the live Cloudflare Worker context:

```bash
npm run deploy
```

### Database Management
To inspect or query the production database manually:
```bash
npx wrangler d1 execute pos-db --remote --command "SELECT * FROM items"
```
