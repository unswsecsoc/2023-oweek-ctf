const fs = require("fs");
const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("db/notes.db");

const path = require("path");
const port = 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

function randomNum() {
  return Math.floor(Math.random() * 1000000000000);
}

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS notes (
    note_id INT,
    note_data TEXT
  )`);

  const FLAG = "'OWEEK{sqli_15_a_cl4551C_4f21z}'";

  db.run(
    `INSERT INTO notes
    SELECT ${randomNum()}, ${FLAG}
    WHERE NOT EXISTS (SELECT * FROM notes WHERE note_data = ${FLAG})`
  );
});

app.post("/api/create-note", (req, res) => {
  const noteId = randomNum();

  db.serialize(() => {
    db.run(`INSERT INTO notes VALUES (${noteId}, ?)`, req.body.note);
  });

  res.redirect(`/note?id=${noteId}`);
});

app.get("/note", (req, res) => {
  db.serialize(() => {
    db.all(
      `SELECT note_data FROM notes WHERE note_id=${req.query.id}`,
      (err, row) => {
        res.type("text");
        if (err) {
          res.send(
            `An unexpected error occured when fetching note:\n\n${err.toString()}`
          );
        } else if (row.length === 0) {
          res.send(`Error: no row returned`);
        } else {
          res.send(row.map((x) => x.note_data).join("\n\n"));
        }
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
