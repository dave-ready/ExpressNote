const path = require ("path")
const notes = require ("../db/db.json")
const fs = require ("fs");

module.exports = function (app) {
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
    
    app.post("/api/notes", function(req, res) {
        notes.push(req.body);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
            if (err) throw err;
           res.json(notes);
        })
        
    })
};
