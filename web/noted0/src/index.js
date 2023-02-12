const fs = require("fs");
const express = require("express");
const app = express();

const path = require("path");
const port = 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/notes", express.static(path.join(__dirname, "notes")));

app.post("/api/create-note", (req, res) => {
  const noteText = req.body.note;
  const fName =
    Math.max(
      0,
      ...fs
        .readdirSync(path.join(__dirname, "notes"))
        .map((x) => parseInt(x.slice(0, -4), 10))
    ) + 1;

  fs.writeFileSync(path.join(__dirname, "notes", `${fName}.txt`), noteText);

  res.send(
    `Note created! Find the note here: <a href="/notes/${fName}.txt">link</a>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
