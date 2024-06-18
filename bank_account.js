let saldo = 500;

function TambahSaldo () {
    let tambah_saldo = parseInt(window.prompt("Saldo yang ditambahkan : "));

    if (tambah_saldo > 0) {
        saldo += tambah_saldo;
        console.log( `Saldo berhasil ditambahkan sebesar ${tambah_saldo}, saldo saat ini adalah sebesar ${saldo}`);
    } else {
        console.log( `Saldo gagal ditambahkan`);
    }
}

function KurangiSaldo () {
    let kurangi_saldo = parseInt(window.prompt("Saldo yang ditambahkan : "));

    if (kurangi_saldo > 0) {
        saldo -= kurangi_saldo;
        console.log( `Saldo berhasil ditambahkan sebesar ${kurangi_saldo}, saldo saat ini adalah sebesar ${saldo}`);
    } else {
        console.log( `Saldo gagal ditambahkan`);
    }
}

