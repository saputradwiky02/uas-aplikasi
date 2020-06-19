const sql = require("../models/db");
sql.query("DROP TABLE berita", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Table berhasil dihapus");
    }
});