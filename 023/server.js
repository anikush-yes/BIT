const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); //BodyParser yra biblioteka



app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
});

app.get('/barsukas', (req, res) => {
    res.send('<h1>Hello Barsukas!</h1>')

});

app.get('/briedis', (req, res) => {
    const data = {
        hello: 'Hello, Briedis!',
    };
    res.json(data);
});

app.get('/briedis/:color/:size', (req, res) => {
    const { color, size } = req.params;
    const data = {
      spalva: color,
      dydis: size,
    }
    res.json(data);
  });

///1.as informacijos perdavimo budas per params: http://localhost:3000/bebras/green/50:
app.get('/barsukas/:color/:size', (req, res) => {
    // const color = req.params.color;
    // const size = req.params.size;
    const {color, size } = req.params;
    res.send(`<h1 style="color: ${color}; font-size: ${size}px;">Hello Barsukas!</h1>`);
});


///2. as informacijos perdavimo budas ir informacijos paieska per query: Query selector variantas http://localhost:3000/bebras?size=40&color=skyblue
app.get('/bebras', (req, res) => {

    const {color, size } = req.query;
    res.send(`<h1 style="color: ${color ?? 'black'}; font-size: ${size ?? 20}px;">Hello, Bebras!</h1>`);
});

///3. informacijos perdavimo budas per BODY, request metodas POSTE:

app.post('/form', (req, res) => {
    // const { name, surname, email, password } = req.body;
    // res.send(`Form post received! ${name} ${surname} ${email} ${password}`);
    res.status(302).redirect('http://localhost:3000/success');
});


app.get('/success', (req, res) => {
    res.send('<h1>Forma gavome!</h1>');
});

///////////////////////////////////////
app.listen(port, () => {
    console.log(`Bebras darbui pasiruošęs ant ${port} porto!`);
});








