const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
});

app.get('/barsukas', (req, res) => {
    res.send('<h1>Hello Barsukas!</h1>')

});


///1.as informacijos perdavimo budas: http://localhost:3000/bebras/green/50:
app.get('/barsukas/:color/:size', (req, res) => {
    // const color = req.params.color;
    // const size = req.params.size;
    const {color, size } = req.params;
    res.send(`<h1 style="color: ${color}; font-size: ${size}px;">Hello Barsukas!</h1>`);
});

///2. as informacijos perdavimo budas ir informacijos paieska: Query selector variantas http://localhost:3000/bebras?size=40&color=skyblue
app.get('/bebras', (req, res) => {

    const {color, size } = req.query;
    res.send(`<h1 style="color: ${color ?? 'black'}; font-size: ${size ?? 20}px;">Hello, Bebras!</h1>`);
});

///3. informacijos perdavimo budas per BODY, request metodas POSTE:

app.post('/form', (req, res) => {
    res.send('Form post received!');

});
///////////////////////////////////////
app.listen(port, () => {
    console.log(`Bebras darbui pasiruošęs ant ${port} porto!`);
});








