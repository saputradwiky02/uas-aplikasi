
const sql = require("./db.js");
const News = function (news) {
    this.judul_berita = news.judul_berita;
    this.kategori = news.kategori;
    this.isi_berita = news.isi_berita;
    this.gambar = news.gambar;
};
//Mengambil semua data berita
News.getAll = result => {
    sql.query("SELECT * FROM berita", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("result: ", res);
        result(null, res);
    });
};
// Mengambil buku yang memiliki id = NewsId
News.findById = (id, result) => {
    sql.query(`SELECT * FROM berita WHERE id = ${id}`, (err, res)=> {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log(res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};
// Membuat data buku baru
News.create = (newNews, result) => {
    console.log(newNews);
    sql.query("INSERT INTO berita (judul_berita, kategori, isi_berita, gambar) VALUES (?,?,?,?)",
        [newNews.judul_berita, newNews.kategori, newNews.isi_berita, newNews.gambar], (err,
            res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log(res);
        console.log("buat berita: ", {
            id: res.insertId, ...newNews
        });
        result(null, { id: res.insertId, ...newNews });
    });
};
// Mengupdate data buku yang memiliki id = id
News.updateById = (id, News, result) => {
    sql.query(
        "UPDATE berita SET judul_berita = ?, kategori = ?, isi_berita = ?, gambar = ? WHERE id = ?",
        [News.judul_berita, News.kategori, News.isi_berita, News.gambar, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("update berita: ", { id: id, ...News });
            result(null, { id: id, ...News });
        }
    );
};
// Menghapus buku yang memiliki id = id
News.remove = (id, result) => {
    sql.query("DELETE FROM berita WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Book with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("hapus berita dengan id: ", id);
        result(null, res);
    });
};
// Menghapus semua buku
News.removeAll = result => {
    sql.query("DELETE FROM berita", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`Menghapus ${res.affectedRows} berita`);
        result(null, res);
    });
};
module.exports = News;