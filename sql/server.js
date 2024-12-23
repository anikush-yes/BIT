const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const port = 6457;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest'
});


// con.connect((err) => {
//     if (err) {
//         console.log('Klaida prisijungiant prie DB');
//         return;
//     }
//     console.log('Prisijungėme prie DB');
// });




app.get('/read', (req, res) => {

    // uzklausa SQL duomenu bazei:

    const sql = `

    SELECT id, name,height, type 
    FROM trees
    -- WHERE type = 'Lapuotis'OR type = 'Spygliuotis'
    -- ORDER BY name, height DESC
    -- LIMIT 3, 2

    `;

    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });


});






app.listen(port, () => {
    console.log(`Duonbazynas darbui pasiruošęs ant ${port} porto!`);
});