const path = require ("path")
const fs = require ("fs");

module.exports = function (app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
            if (err) throw (err);
            res.json(JSON.parse(data))
        })
        
    });
    // app.post("/api/db", function(req, res) {

    // })
};
