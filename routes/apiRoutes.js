import path from "path";
import db from "../db/db.json"

module.exports = function (app) {
    app.get("/api/db", function(req, res) {
        res.json.parse(db);
        console.log(db)
    });
    // app.post("/api/db", function(req, res) {

    // })
};
