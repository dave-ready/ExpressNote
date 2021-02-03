const path = require ("path")
const notes = require ("../db/db.json")
const fs = require ("fs");

module.exports = function (app) {
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
    
    app.post("/api/notes", function(req, res) {
        const note = req.body;
        notes.push(note);
        for (let i = 0 ; i < notes.length; i++) {
            notes[i].id = i + 1
        };
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
            if (err) throw err;
           res.json(notes);
        });
        
    });

    // app.delete("/api/notes/:id", function(req, res) {

    // })
};
