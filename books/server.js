const fs = require("node:fs");
const handlebars = require("handlebars");
const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 80;
 
const domain = "http://books.final/";
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
 
const top = fs.readFileSync("./html/top.html", "utf8");
const bottom = fs.readFileSync("./html/bottom.html", "utf8");
 
// ROUTES
 
 
app.get("/", (req, res) => {
  res.send("Labas, Bebrai!")
});
 
app.get("/create", (req, res) => {
  let file = top + fs.readFileSync("./html/create.html", "utf8") + bottom;
  const template = handlebars.compile(file);
  const data = { manoKintamasis: "Labas", pageTitle: "Nauja knyga",
    domain: domain
   };
  const html = template(data);
  res.send(html);
});
 
 
app.post("/store", (req,res) => {
  const {title, author, year, genre, isbn, pages} = req.body;
  const id = uuidv4();
 
  const book = {id, title, author, year, genre, isbn, pages};
 
  let data = fs.readFileSync("./data/books.json", "utf8");
  data = JSON.parse(data);
  data.push(book);
  data = JSON.stringify(data);
  fs.writeFileSync("./data/books.json", data)
 
  res.status(302).redirect(domain);
 
});
 
app.listen(port, () => {
  console.log(`Knygynas darbui pasiruošęs ant http://localhost:${port}`);
});



