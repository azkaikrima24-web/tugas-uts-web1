# BookStore – Website Katalog dan Pemesanan Buku

## 1. Deskripsi Project
BookStore merupakan website sederhana untuk mengelola katalog buku, informasi stok, pemesanan buku, dan tracking pengiriman. Website ini dibuat sebagai project praktikum Pemrograman Web.

## 2. Tujuan Project
- Menampilkan katalog buku.
- Mengelola informasi stok buku.
- Memudahkan proses pemesanan buku.
- Menampilkan informasi tracking pengiriman.
- Menerapkan HTML, CSS, dan JavaScript dalam pembuatan website.

## 3. Teknologi yang Digunakan
- HTML
- CSS
- JavaScript
- LocalStorage
- Visual Studio Code

## 4. Fitur Website
- Login
- Dashboard
- Katalog Buku
- Tambah Stok Buku
- Pemesanan Buku
- Reset Pesanan
- History Transaksi
- Tracking Pengiriman
- Logout

## 5. Struktur Project
- login.html
- dashboard.html
- stok.html
- checkout.html
- tracking.html
- css/style.css
- js/data.js
- js/script.js
- img/

## 6. Dokumentasi

A. Halaman Login (login.html)

Halaman Login merupakan halaman awal website BookStore yang digunakan pengguna untuk masuk ke dalam sistem.

Pada halaman ini terdapat:

- Input email.
- Input password.
- Tombol Login.
- Fitur Lupa Password.
- Fitur Daftar Pengguna.

Pengguna memasukkan email dan password yang sesuai dengan data pengguna. JavaScript melakukan pengecekan terhadap data tersebut. Jika sesuai, pengguna diarahkan ke halaman Dashboard.

![login](<img/ssan/Screenshot 2026-11-02 141137.png>)
![daftar](img/ssan/daftar.png)
![lupapw](img/ssan/lupapw.png)

B. Halaman Dashboard (dashboard.html)

Halaman Dashboard merupakan halaman utama setelah pengguna berhasil login. Dashboard berfungsi sebagai pusat navigasi untuk mengakses fitur-fitur utama website BookStore.

Pada halaman ini terdapat beberapa menu utama:
- Katalog Buku.
- Tracking.
- Pemesanan.
- History Transaksi.

Setiap menu dilengkapi ikon dan keterangan agar pengguna lebih mudah memahami fungsi masing-masing fitur.

![dashboard](img/ssan/dasboard.png)

C. Halaman Katalog Buku dan Stok (stok.html)

Halaman Katalog Buku digunakan untuk menampilkan informasi buku yang tersedia di toko.

Informasi buku yang ditampilkan meliputi:
- Kode barang.
- Nama buku.
- Jenis buku.
- Edisi.
- Jumlah stok.
- Harga buku.

Halaman ini juga memiliki fitur Tambah Stok Buku Baru untuk memasukkan data buku baru ke dalam katalog.

Selain itu, terdapat tombol Data Stok Buku yang digunakan untuk menampilkan atau menyembunyikan tabel informasi stok buku. JavaScript digunakan untuk menampilkan katalog, menambahkan buku, dan memperbarui informasi stok.
![katalog](img/ssan/katalog1.png)
![tambah](img/ssan/tambahstok.png)
![datastok](img/ssan/datastok.png)

D. Halaman Pemesanan (checkout.html)

Halaman Pemesanan digunakan untuk melakukan simulasi transaksi pembelian buku.

Halaman ini memiliki beberapa bagian, yaitu:

1. Buku yang Dipilih

Menampilkan informasi buku yang dipilih pengguna dari halaman katalog.
![pesanan](img/ssan/pesanan.png)

2. Informasi Pemesan

Pengguna mengisi nama, email, alamat pengiriman, dan metode pembayaran.
![infopesanan](img/ssan/infopemesan.png)

3. Buat Pesanan

Tombol ini digunakan untuk memproses pemesanan buku.
![buatpesanan](img/ssan/buatpesanan.png)

4. Reset Pesanan

Fitur ini digunakan untuk membatalkan buku yang dipilih dan mengembalikan form pemesanan ke kondisi awal.
![reset](img/ssan/resetpesanan.png)

5. History Transaksi

Digunakan untuk menampilkan informasi transaksi terakhir yang telah dilakukan pengguna. JavaScript digunakan untuk memproses pesanan dan menyimpan informasi transaksi menggunakan LocalStorage.
![history](img/ssan/history.png)

E. Halaman Tracking Pengiriman (tracking.html)

Halaman Tracking digunakan untuk melihat informasi pengiriman buku yang telah dipesan. Pengguna memasukkan nomor Delivery Order (DO) untuk mencari informasi pengiriman.

Informasi yang ditampilkan meliputi:
- Nomor Delivery Order.
- Nama pemesan.
- Status pengiriman.
- Ekspedisi.
- Tanggal pengiriman.
- Jenis paket.
- Total pembayaran.
- Progress pengiriman.
- Riwayat perjalanan paket.

Halaman ini membantu pengguna mengetahui perkembangan pengiriman buku yang dipesan.
![info1](img/ssan/infopengiriman1.png)
![info2](img/ssan/infopengiriman2.png)

F. Fitur Logout

Fitur Logout digunakan untuk mengakhiri sesi pengguna yang sedang login. Ketika pengguna memilih Logout, sistem akan menghapus data sesi login dari LocalStorage dan mengarahkan pengguna kembali ke halaman Login.
Fitur ini digunakan untuk mengakhiri akses pengguna ke halaman utama BookStore.

![logout](img/ssan/logout.png)

# KODE
checkout
![1](img/ssan/Screenshot_Kode_HTML_BookStore/checkout_kode_01.png)
![2](img/ssan/Screenshot_Kode_HTML_BookStore/checkout_kode_02.png)
![3](img/ssan/Screenshot_Kode_HTML_BookStore/checkout_kode_03.png)
![4](img/ssan/Screenshot_Kode_HTML_BookStore/checkout_kode_04.png)
![5](img/ssan/Screenshot_Kode_HTML_BookStore/checkout_kode_05.png)

dashboard
![6](img/ssan/Screenshot_Kode_HTML_BookStore/dashboard_kode_01.png)
![7](img/ssan/Screenshot_Kode_HTML_BookStore/dashboard_kode_02.png)

login
![8](img/ssan/Screenshot_Kode_HTML_BookStore/login_kode_01.png)
![9](img/ssan/Screenshot_Kode_HTML_BookStore/login_kode_02.png)
![10](img/ssan/Screenshot_Kode_HTML_BookStore/login_kode_03.png)

stok buku
![11](img/ssan/Screenshot_Kode_HTML_BookStore/stok_kode_01.png)
![12](img/ssan/Screenshot_Kode_HTML_BookStore/stok_kode_02.png)
![13](img/ssan/Screenshot_Kode_HTML_BookStore/stok_kode_03.png)

tracking
![14](img/ssan/Screenshot_Kode_HTML_BookStore/tracking_kode_01.png)
![15](img/ssan/Screenshot_Kode_HTML_BookStore/tracking_kode_02.png)
