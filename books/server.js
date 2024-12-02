const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const fs = require('node:fs');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); //BodyParser yra biblioteka



app.get('/create', (req, res) => {
    const file = fs.readFileSync('./html/create.html', 'utf8');
    const template = handlebars.compile(file);
    const data = {manoKintamasis: 'Labas'};
    const html = template(data);
    res.send(html);
   
  });

// const handlebars = require("handlebars");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

app.listen(port, () => {
    console.log(`Knygynas darbui pasiruošęs ant ${port} porto!`);
});








