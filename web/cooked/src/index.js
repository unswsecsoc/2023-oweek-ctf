const fs = require("fs");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const path = require("path");
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

const loginDetails = {};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const sendErr = (err) => {
    res.redirect("/login.html?err=" + encodeURIComponent(err));
  };

  if (!username || !password) {
    return sendErr("Must supply username and password");
  }

  if (req.body.username in loginDetails) {
    if (loginDetails[req.body.username] === req.body.password) {
      res.cookie("is_admin", "false");
      return res.redirect("/dashboard.html");
    }
  }

  return sendErr("Invalid creds");
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  const sendErr = (err) => {
    res.redirect("/login.html?err=" + encodeURIComponent(err));
  };

  if (!username || !password) {
    return sendErr("Must supply username and password");
  }

  if (req.body.username in loginDetails) {
    return sendErr("Username already exists");
  }

  loginDetails[req.body.username] = req.body.password;

  res.redirect(
    "/login.html?msg=" +
      encodeURIComponent("Successfully created new account. Please log in")
  );
});

app.get("/api/flag", (req, res) => {
  if (req.cookies["is_admin"] === "true") {
    res.send("OWEEK{c00k135_and_cr3aM_5h3kj}");
  } else {
    res.status(403).send("You are not an admin");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
