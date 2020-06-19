const sql = require("../models/db");
sql.query("DELETE FROM berita WHERE id = '1'", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data berhasil dihapus: " + resaffectedRows);
    }
});