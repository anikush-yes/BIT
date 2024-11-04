// 1. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir tą stringą ideda į h1 tagą ir tą h1 tagą ideda į body tagą.

// function addHeading(text) {
//     // Sukuriame h1 elementą
//     const h1 = document.createElement('h1');
//     // Priskiriame tekstą į h1
//     h1.textContent = text;
//     // Pridedame h1 į body
//     document.body.appendChild(h1);
// }
// //Iskvieciam funkcija
// addHeading("Sveiki atvykę!");



const fun1 = (text) => 
{
const body = document.querySelector('body');
const h1Html = `<h1>${text}</h1`;
body.innerHTML = h1Html;

}
//Iskvieciam funkcija
fun1 ("labas rytas!");



// 2. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir ras stringas yra spalva, kuria reikia nuspalvinti h1 tagą.

const fun2 = (color) => {

    const h1 = document.querySelector ('h1');
    h1.style.color = color;

}

fun2('crimson');

//3. 

// Reikia parašyti funkciją, kuri nieko nepriima, bet pakeičia h1 tago teksta į "Kaboom!".

function changeHeadingText() {
    // Surandame pirmąjį h1 elementą puslapyje
    const h1 = document.querySelector('h1');
    // Patikriname, ar h1 egzistuoja, ir pakeičiame tekstą
    if (h1) {
        h1.textContent = "Kaboom!";
    }
}
changeHeadingText();


const C = [5, 'Labas', true ];
const D = C; // by reference
const F = [...C];//by copying values // const F = [5, 'Labas', true ]

//[]
 
C[0] = C[0] + 2;
 
console.log(C, D, F);


const fun15 = (...rest) => {
    console.log(rest[0] + rest[1]);
}
fun15(5, 8);
 
 
 
const fun16 = (a, b) => {
    console.log(a + b);
}
const spread = [5, 8];
fun16(...spread);


const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    age: 99,
    city: 'Vilnius',
    country: 'Lietuva',
    hasTail: true
}
 
const { age, city } = person;
 
 
console.log(age, city);


// Masyvo dekonstravimas

const animals = ['bebras', 'Vilkas', 'lokys'];

const [animals1, animals2] = animals;

console.log(animals1, animals2);


//Dvigubos funkcijos , "callback":

const bigFun = (a, b) => {

    console.log('BIG FUN SUMA', a + b);

}

const notBigfun = c => {

    const d = 5;
    const e = 8;
    c(d,e);//notBigfun callina bigFun ir iskviecia funkcija bigFun

}

notBigfun(bigFun);

//


// const printItem = item =>{

//     console.log('Item:', item.toUpperCase);
// }

const itemsData = f => {
    const items = ['stalas', 'kede', 'lova', 'spinta'];
 
    for (let i = 0; i < items.length; i++) {
        f(items[i]);
    }
   
}


itemsData(item => {
    console.log('ITEM:', item.toUpperCase());
});

console.log('---------------------');

//

const coolItems = ['stalas', 'kede', 'lova', 'spinta'];

for (let i = 0; i < coolItems.length; i++) {
    console.log('ITEM:', coolItems[i].toUpperCase());
}

console.log('---------------------');

//ForEach tokiu paprastu budu mes prasukinejam masyvus:

coolItems.forEach((myItem, ciadedaIndeksa,darKazkas ) => {
    console.log('ITEM:',ciadedaIndeksa, myItem.toUpperCase(), darKazkas);
});

console.log('---------------------');


//map skirtumas su for each (nieko negrazina), kad jis grazina, siui atveju grazina visa masyva:

const gr = coolItems.map((myItem, index) => {
    return  index + ':' + myItem.toUpperCase();
});

console.log('GR:', gr);

const withDivs = coolItems.map(item => {
    return `<div>${item.toUpperCase()}</div>`;
});
 
console.log('WITH DIVS:', withDivs);
 
let divs = '';
 
for (let i = 0; i < withDivs.length; i++) {
    divs += withDivs[i];
}

const body = document.querySelector('body');
body.innerHTML = divs;