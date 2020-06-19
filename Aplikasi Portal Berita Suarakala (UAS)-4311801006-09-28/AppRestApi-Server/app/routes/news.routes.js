module.exports = app => {
    const berita = require("../controller/news.controller");
    //Mengambil semua data
    app.get("/api/berita", berita.findAll);
    //Mengambil data buku yang memiliki id = id
    app.get("/api/berita/:id", berita.findOne);
    //Membuat buku baru
    app.post("/api/berita", berita.create);
    //Mengubah data buku yang memiliki id = id
    app.put("/api/berita/:id", berita.update);
    //Hapus data buku yang memiliki id = id
    app.delete("/api/berita/:id", berita.delete);
    //Hapus seluruh data
    app.delete("/api/berita", berita.deleteAll);
};