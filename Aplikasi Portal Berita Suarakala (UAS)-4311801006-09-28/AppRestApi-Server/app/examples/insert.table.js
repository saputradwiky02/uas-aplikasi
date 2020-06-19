const sql = require("../models/db");
sql.query("INSERT INTO berita VALUES (NULL, 'judul', 'kategori', 'isi berita' 'perpustakaan.png');", (err, res => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data berhasil ditambahkan: " + res.affectedRows);
    }
}));