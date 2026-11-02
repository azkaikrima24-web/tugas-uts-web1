// LOGIN BOOKSTORE
const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const pengguna = dataPengguna.find(function(user) {
            return user.email === email && user.password === password;
        });

        if (pengguna) {
            localStorage.setItem("penggunaLogin", JSON.stringify(pengguna));

            alert("Login berhasil! Selamat datang di BookStore.");

            window.location.href = "dashboard.html";

        } else {
            alert("Email atau password yang kamu masukkan salah!");
        }
    });
}

//MODAL LOGIN

function bukaModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.style.display = "flex";
    }
}

function tutupModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.style.display = "none";
    }
}

//DASHBOARD DAN GREETING

const greeting = document.getElementById("greeting");

if (greeting) {
    const jam = new Date().getHours();
    let sapaan = "";

    if (jam >= 5 && jam < 11) {
        sapaan = "Selamat pagi";
    } else if (jam >= 11 && jam < 15) {
        sapaan = "Selamat siang";
    } else if (jam >= 15 && jam < 18) {
        sapaan = "Selamat sore";
    } else {
        sapaan = "Selamat malam";
    }

    const penggunaLogin = JSON.parse(
        localStorage.getItem("penggunaLogin")
    );

    greeting.textContent = penggunaLogin
        ? sapaan + ", " + penggunaLogin.nama + "!"
        : sapaan + ", selamat datang!";
}

//KATALOG BUKU
const daftarBuku = document.getElementById("daftarBuku");

function tampilkanKatalog() {
    if (!daftarBuku) return;

    daftarBuku.innerHTML = "";

    dataKatalogBuku.forEach(function(buku) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${buku.cover}" alt="${buku.namaBarang}">
            <h3>${buku.namaBarang}</h3>
            <p><b>Kode:</b> ${buku.kodeBarang}</p>
            <p><b>Jenis:</b> ${buku.jenisBarang}</p>
            <p><b>Edisi:</b> ${buku.edisi}</p>
            <p><b>Stok:</b> ${buku.stok}</p>
            <p><b>Harga:</b> ${buku.harga}</p>
            <button onclick="pilihBuku('${buku.kodeBarang}')">
                Pesan Buku
            </button>
        `;

        daftarBuku.appendChild(card);
    });
}

tampilkanKatalog();

//TAMBAH STOK BUKU
const formTambahStok = document.getElementById("formTambahStok");

if (formTambahStok) {
    formTambahStok.addEventListener("submit", function(event) {
        event.preventDefault();

        const kode = document.getElementById("kodeBarang").value.trim();
        const nama = document.getElementById("namaBarang").value.trim();
        const jenis = document.getElementById("jenisBarang").value;
        const edisi = document.getElementById("edisi").value;
        const stok = Number(document.getElementById("stok").value);
        const harga = document.getElementById("harga").value.trim();

        if (!kode || !nama || !jenis || !edisi || stok < 0 || !harga) {
            alert("Semua data harus diisi dengan benar!");
            return;
        }

        const kodeSudahAda = dataKatalogBuku.some(function(buku) {
            return buku.kodeBarang === kode;
        });

        if (kodeSudahAda) {
            alert("Kode barang sudah tersedia!");
            return;
        }

        const bukuBaru = {
            kodeBarang: kode,
            namaBarang: nama,
            jenisBarang: jenis,
            edisi: edisi,
            stok: stok,
            harga: harga,
            cover: "img/pengantar_komunikasi.jpg"
        };

        dataKatalogBuku.push(bukuBaru);

        alert("Buku berhasil ditambahkan!");

        formTambahStok.reset();

        tampilkanKatalog();
        tampilkanTabelStok();
    });
}

//TABEL STOK

function tampilkanTabelStok() {
    const tabelStok = document.getElementById("tabelStok");

    if (!tabelStok) return;

    tabelStok.innerHTML = "";

    dataKatalogBuku.forEach(function(buku) {
        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>${buku.kodeBarang}</td>
            <td>${buku.namaBarang}</td>
            <td>${buku.jenisBarang}</td>
            <td>${buku.edisi}</td>
            <td>${buku.stok}</td>
            <td>${buku.harga}</td>
        `;

        tabelStok.appendChild(baris);
    });
}

tampilkanTabelStok();

//CHECKOUT / PEMESANAN
function pilihBuku(kode) {
    const buku = dataKatalogBuku.find(function(item) {
        return item.kodeBarang === kode;
    });

    if (buku) {
        localStorage.setItem("bukuDipilih", JSON.stringify(buku));
        window.location.href = "checkout.html";
    }
}

const bukuCheckout = document.getElementById("bukuCheckout");

if (bukuCheckout) {
    const buku = JSON.parse(localStorage.getItem("bukuDipilih"));

    if (buku) {
        bukuCheckout.innerHTML = `
            <h3>${buku.namaBarang}</h3>
            <p>Kode: ${buku.kodeBarang}</p>
            <p>Harga: ${buku.harga}</p>
            <p>Stok tersedia: ${buku.stok}</p>
        `;
    } else {
        bukuCheckout.innerHTML = "<p>Silakan pilih buku dari katalog.</p>";
    }
}

// MODAL NOTIFIKASI CUSTOM
function tampilkanNotifikasi(judul, pesan, konfirmasi = false, callback = null) {

    const modal = document.getElementById("modalNotifikasi");

    document.getElementById("judulNotifikasi").textContent = judul;
    document.getElementById("pesanNotifikasi").textContent = pesan;

    const tombol = document.getElementById("tombolNotifikasi");

    tombol.innerHTML = "";

    if (konfirmasi) {

        const btnYa = document.createElement("button");
        btnYa.textContent = "Ya";
        btnYa.className = "btn-danger";

        btnYa.onclick = function() {
            modal.style.display = "none";

            if (callback) callback(true);
        };

        const btnTidak = document.createElement("button");
        btnTidak.textContent = "Batal";
        btnTidak.className = "btn-secondary";

        btnTidak.onclick = function() {
            modal.style.display = "none";

            if (callback) callback(false);
        };

        tombol.appendChild(btnYa);
        tombol.appendChild(btnTidak);

    } else {

        const btnOK = document.createElement("button");
        btnOK.textContent = "OK";

        btnOK.onclick = function() {
            modal.style.display = "none";

            if (callback) callback();
        };

        tombol.appendChild(btnOK);
    }

    modal.style.display = "flex";
}

// RESET PESANAN
const btnResetPesanan = document.getElementById("btnResetPesanan");

if (btnResetPesanan) {
    btnResetPesanan.addEventListener("click", function() {

        tampilkanKonfirmasi(
            "Reset Pesanan",
            "Apakah kamu yakin ingin menghapus buku yang dipilih?",
            function(setuju) {

                if (setuju) {

                    // Hapus buku yang dipilih
                    localStorage.removeItem("bukuDipilih");

                    // Reset tampilan buku
                    const bukuCheckout = document.getElementById("bukuCheckout");

                    if (bukuCheckout) {
                        bukuCheckout.innerHTML = `
                            <p>Silakan pilih buku dari katalog.</p>
                        `;
                    }

                    // Kosongkan form pemesanan
                    const formCheckout = document.getElementById("formCheckout");

                    if (formCheckout) {
                        formCheckout.reset();
                    }

                    // Tampilkan notifikasi
                    tampilkanNotifikasi(
                        "Reset Berhasil!",
                        "Pesanan berhasil dikembalikan ke kondisi awal."
                    );

                }

            }
        );

    });
}
const formCheckout = document.getElementById("formCheckout");

if (formCheckout) {
    formCheckout.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("namaPemesan").value.trim();
        const email = document.getElementById("emailPemesan").value.trim();
        const alamat = document.getElementById("alamat").value.trim();
        const pembayaran = document.getElementById("pembayaran").value;

        if (!nama || !email || !alamat || !pembayaran) {
            alert("Mohon lengkapi seluruh data pemesanan!");
            return;
        }

        const buku = JSON.parse(localStorage.getItem("bukuDipilih"));

        if (!buku) {
            alert("Silakan pilih buku terlebih dahulu!");
            return;
        }

        if (buku.stok <= 0) {
            alert("Stok buku habis!");
            return;
        }

        buku.stok--;

        const nomorDO = "20230014";

        const pesanan = {
            nomorDO: nomorDO,
            nama: nama,
            email: email,
            alamat: alamat,
            pembayaran: pembayaran,
            buku: buku.namaBarang,
            total: buku.harga
        };

        localStorage.setItem("pesananTerakhir", JSON.stringify(pesanan));

        alert(
            "Pesanan berhasil dibuat!\n" +
            "Nomor Delivery Order: " + nomorDO
        );

        window.location.href = "tracking.html";
    });
}

//TRACKING PENGIRIMAN
const formTracking = document.getElementById("formTracking");

if (formTracking) {
    formTracking.addEventListener("submit", function(event) {
        event.preventDefault();

        const nomorDO = document.getElementById("nomorDO").value.trim();

        let pengiriman = dataTracking[nomorDO];

        const pesananTerakhir = JSON.parse(
            localStorage.getItem("pesananTerakhir")
        );

        if (pesananTerakhir && pesananTerakhir.nomorDO === nomorDO) {
            pengiriman = {
                nomorDO: pesananTerakhir.nomorDO,
                nama: pesananTerakhir.nama,
                status: "Pesanan berhasil dibuat",
                ekspedisi: "JNE",
                tanggalKirim: new Date().toLocaleDateString("id-ID"),
                paket: "REG",
                total: pesananTerakhir.total,
                perjalanan: [
                    {
                        waktu: new Date().toLocaleString("id-ID"),
                        keterangan: "Pesanan diterima dan sedang diproses"
                    }
                ]
            };
        }

        if (!pengiriman) {
            alert("Nomor Delivery Order tidak ditemukan!");
            return;
        }

        tampilkanTracking(pengiriman);
    });
}

function tampilkanTracking(data) {
    const hasilTracking = document.getElementById("hasilTracking");

    if (!hasilTracking) return;

    hasilTracking.innerHTML = `
        <h2>Informasi Pengiriman</h2>

        <p><b>Nomor DO:</b> ${data.nomorDO}</p>
        <p><b>Nama Pemesan:</b> ${data.nama}</p>
        <p><b>Status:</b> <span class="status">${data.status}</span></p>
        <p><b>Ekspedisi:</b> ${data.ekspedisi}</p>
        <p><b>Tanggal Kirim:</b> ${data.tanggalKirim}</p>
        <p><b>Jenis Paket:</b> ${data.paket}</p>
        <p><b>Total Pembayaran:</b> ${data.total}</p>

        <h3>Progress Pengiriman</h3>

        <div class="progress">
            <div class="progress-bar" id="progressBar"></div>
        </div>

        <h3>Riwayat Perjalanan</h3>

        <table>
            <thead>
                <tr>
                    <th>Waktu</th>
                    <th>Keterangan</th>
                </tr>
            </thead>

            <tbody id="riwayatTracking"></tbody>
        </table>
    `;

    const progressBar = document.getElementById("progressBar");

    if (data.status === "Dikirim") {
        progressBar.style.width = "100%";
    } else if (data.status === "Dalam Perjalanan") {
        progressBar.style.width = "65%";
    } else {
        progressBar.style.width = "30%";
    }

    const riwayat = document.getElementById("riwayatTracking");

    if (data.perjalanan) {
        data.perjalanan.forEach(function(item) {
            const baris = document.createElement("tr");

            baris.innerHTML = `
                <td>${item.waktu}</td>
                <td>${item.keterangan}</td>
            `;

            riwayat.appendChild(baris);
        });
    }
}

// TOGGLE DATA STOK BUKU
const btnDataStok = document.getElementById("btnDataStok");
const containerDataStok = document.getElementById("containerDataStok");

if (btnDataStok && containerDataStok) {

    btnDataStok.addEventListener("click", function() {

        const sedangTersembunyi =
            containerDataStok.style.display === "none";

        if (sedangTersembunyi) {

            containerDataStok.style.display = "block";
            btnDataStok.textContent = "Data Stok Buku ▲";

        } else {

            containerDataStok.style.display = "none";
            btnDataStok.textContent = "Data Stok Buku ▼";

        }

    });

}

// LOGOUT BOOKSTORE
const btnLogout = document.getElementById("btnLogout");

if (btnLogout) {
    btnLogout.addEventListener("click", function(event) {
        event.preventDefault();

        const yakin = confirm("Apakah kamu yakin ingin logout?");

        if (yakin) {
            localStorage.removeItem("penggunaLogin");
            window.location.href = "login.html";
        }
    });
}