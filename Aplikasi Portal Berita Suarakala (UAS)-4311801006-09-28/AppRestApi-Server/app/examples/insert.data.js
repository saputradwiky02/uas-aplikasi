const sql = require("../models/db");
sql.query("INSERT INTO berita VALUES (NULL, 'ini judul', ' ini kategori','ini isi_berita', 'ini berita.png');", (err, res) => {
 if (err) {
 console.log(err);
 } else {
 console.log("Data berhasil ditambahkan: " + res.affectedRows
);
 }
});