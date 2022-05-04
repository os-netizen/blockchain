const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("./stylesheets/home");
});

app.get("/transfer", (req, res) => {
  res.render("./stylesheets/transfer");
});

app.get("/pricing", (req, res) => {
  res.render("./stylesheets/pricing");
});

app.get("/proof", (req, res) => {
  // res.send(req.params);
  // res.render("proof");

  const { contractAddress, tokenID } = req.query;
  // console.log(contractAddress, tokenID);
  res.render("./stylesheets/proofTry");
});

app.get("/newProducts", (req, res) => {
  res.render("./stylesheets/newProducts");
});

app.get("/mintToCustm", (req, res) => {
  res.render("./stylesheets/mintToCustm");
});

app.post("/newProducts", (req, res) => {
  // res.render("./stylesheets/home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
