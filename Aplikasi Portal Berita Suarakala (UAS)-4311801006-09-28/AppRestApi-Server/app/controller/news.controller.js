//app/controllers/book.controller.js
const News = require("../models/news.model");
//Mengambil semua data buku
exports.findAll = (req, res) => {
    News.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Terjadi kesalahan"
            });
        } else {
            res.send(data);
        }
    });
};
// Mengambil buku yang memiliki id = id
exports.findOne = (req, res) => {
    News.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Berita dengan id ${req.params.id} tidak ditemukan`
                });
            } else {
                res.status(500).send({
                    message: `Error ketika mengambil berita dengan id ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};
// Membuat data buku baru
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content tidak boleh kosong"
        });
    }
    const news = new News({
        judul_berita: req.body.judul_berita,
        kategori: req.body.kategori,
        isi_berita: req.body.isi_berita,
        gambar: req.body.gambar
    });
    News.create(news, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Terjadi kesalahan"
            });
        }
        else {
            res.send(data);
        }
    });
};
// Mengupdate data buku yang memiliki id = id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content tidak boleh kosong"
        });
    }
    News.updateById(
        req.params.id,
        new News(req.body), (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Berita dengan id ${req.params.id} tidak ditemukan`
                    });
                } else {
                    res.status(500).send({
                        message: `Error ketika mengupdate berita dengan id ${req.params.id}`
                    });
                }
            } else {
                res.send(data);
            }
        }
    );
};
// Menghapus buku yang memiliki id = id
exports.delete = (req, res) => {
    News.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Berita dengan id ${req.params.id} tidak ditemukan`
                });
            } else {
                res.status(500).send({
                    message: `Error ketika menghapus berita dengan id ${req.params.id}`
                });
            }
        } else res.send({
            message: `Berhasil menghapus data berita!`
        });
    });
};
// Menghapus semua buku
exports.deleteAll = (req, res) => {
    News.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Terjadi kesalahan"
            });
        }
        else {
            res.send({
                message: `Berhasil menghapus seluruh data berita!` });
        }
    });
};