const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("index"));

app.listen(3001, () => console.log(`LISTENING ON PORT 3001`));
