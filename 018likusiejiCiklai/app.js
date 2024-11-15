

const size = 'S';

// if (size === 'S') {
//     console.log('S');
//   }
//   if (size === 'S' || size === 'M') {
//     console.log('M');
//   }
//   if (size === 'S' || size === 'M' || size === 'L') {
//     console.log('L');
//   }
//   if (size === 'S' || size === 'M' || size === 'L' || size === 'XL') {
//     console.log('XL');
//   }


  // switch kai reikia if kuris grazina daug atsakymu, pakeicia if elsa

  switch (size) {
    case 'S':
        console.log('S');
    case 'M':
        console.log('M');
    case 'L':
        console.log('L');
    case 'XL':
        console.log('XL');
}

const letter = 'B'

// if (letter === 'A') {
//     console.log('A');
// } else if (letter === 'B') {
//     console.log('B');
// } else if (letter === 'C') {
//     console.log('C');
// } else {
//     console.log('D');
// }

switch (letter) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('D');
        break;
}

console.log(1 + '1');
console.log(1 - '1');
console.log(1 - true);
console.log(1 + true);


//---------------------------------------

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



let moneta;

do  {
moneta = rand (0, 1) ? 'S' : 'H';
console.log(moneta);


}while (moneta !== 'S');


let moneta1;
let moneta2;
let saugiklis = 50;

do {

    moneta1 = rand(0, 1) ? 'S' : 'H';
    moneta2 = rand(0, 1) ? 'S' : 'H';
    console.log(moneta1, moneta2);

    if(--saugiklis < 0) {

        console.log('BOOM');
        break;
    }

} while (true);

/* invert

== <---> !=
=== <---> !==
> <---> <=
< <---> >=
|| <---> &&

*/

let jonasTuri = 0;

const mociuteDave = rand(300, 700);

jonasTuri += mociuteDave;

while (jonasTuri <= 500){
    console.log('Jonas važiuoja');
const uzdirbo = rand(20, 100);
jonasTuri += uzdirbo;


}

console.log(jonasTuri);

//for in

const masyvas = ['blue', 'red', 'green', 'yellow', 'black', 'white'];

for ( let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
};


for (let i in masyvas){
    console.log(masyvas[i]);
}

//for off

for (let color of masyvas){
    console.log(color);
}


//jei turime nesunumeruota objekta:

const objektas = {
    color: 'blue',
    weight: 100,
    height: 200,
    width: 300
};


// const raktas = 'color';
//objektas.color

for(let raktas in objektas){

    console.log(raktas, objektas[raktas]);
}