const sql = require("../models/db");
sql.query("SELECT * FROM berita", (err, res) => {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("result: ", res);
    }
});