const sql = require("../models/db");
sql.query("CREATE TABLE berita (id int NOT NULL AUTO_INCREMENT, "
    + "judul_berita VARCHAR(255) NOT NULL, "
    + "kategori VARCHAR (255) NOT NULL, "
    + "isi_berita LONGTEXT, "
    + "gambar VARCHAR(255)"
    + "DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))",
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table berhasil dibuat");
        }
});