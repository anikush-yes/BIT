//01 Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const container = document.getElementById("container");

// Append 14 h1 tags with the number 4
for (let i = 0; i < 14; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = "4";
    container.appendChild(h1);
}

// Append 14 h4 tags with the number 1
for (let i = 0; i < 14; i++) {
    const h4 = document.createElement("h4");
    h4.textContent = "1";
    container.appendChild(h4);
}


//02 Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.



function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const digitsBlock = document.getElementById("digitsBlock");
let Html = '';

for (let i = 0; i < 44; i++) {
    const num = rand(14, 44);
    //stringas

    let div;

    // Patikriname, ar skaičius dalijasi iš 4 be liekanos
    if (num % 4 === 0) {
        div = `<div style="color: red">${num}</div>`;
    } else {
        div = `<div style="color: blue">${num}</div>`
    }

    Html += div;

}
digitsBlock.innerHTML = Html



//3 Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.


const circlesContainer = document.querySelector(".circlesContainer");


//ciklassukuria 14 elementu:
for (let i = 0; i < 14; i++) {

    // Sukuriamas apskritimo elementas:
    const circle = document.createElement('div');
    circle.classList.add('circle');// Pridedame klasę "circle" kiekvienam apskritimui
    circlesContainer.appendChild(circle);// Pridedame apskritimą į konteinerį
}

// Html += div;

// circlesHtml.innerHTML = Html



//4  Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).


const uzd4 = document.querySelector(".coloredCirclesDiv");



for (let i = 0; i < 8; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    // Priskiriame klases „red“ arba „blue“ pakaitomis
    if (i % 2 === 0) {
        circle.classList.add('red');
    } else {
        circle.classList.add('blue');
    }
    uzd4.appendChild(circle);
    // uzd4.innerHTML = Html:
    // Čia bandoma priskirti Html kintamąjį, kuris arba nėra apibrėžtas, arba yra nereikalingas. Kadangi elementai jau buvo pridėti naudojant appendChild, šis žingsnis nėra reikalingas ir iš tikrųjų gali pašalinti ankstesnį darbą.
}

//5. Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.


const uzd5 = document.querySelector ('#uzd5');
let cell = '';

for (let i = 4; i <= 14; i++) {
    cell += `<div>4 x ${i} = ${4 * i}</div>`;
}

uzd5.innerHTML = cell;


//5 uzduotis naudojant table:

// let table = `<table border = 1 cellpadding = "10">`
 
// for (let i = 4; i <= 14; i++) {
//   let sum = 4 * i
 
//   table+= `<tr><td>4*${i}</td> <td>${sum}</td></tr>`
 
// }
 
// table+= `</table>`
 
 
 
 
// uzduotis5.innerHTML = table

//6.  Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

const uzd6 = document.querySelector ('#uzd6');

let stars = '';

for(let i = 0; i < 444; i++){
if ((i + 1) % 44 === 0){
    stars += '<br>'
} else {
    stars += '*';
}

}

uzd6.innerHTML += stars;


//7. Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).


//random color funkcija:

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


function drawNestedSquares() {

  //  Ieškome HTML elemento su ID uzd7, į kurį bus pridedami sugeneruoti kvadratai:  
const septintaUzduotis = document.querySelector('#uzd7');

// Pradinis didžiausio kvadrato dydis yra 300 pikselių. Kiekviename cikle šis dydis bus sumažintas:
let kvadratas = 300;

//Tai tuščia eilutė, į kurią bus kaupiami HTML fragmentai su kiekvienu kvadratu.:
let visiKvadratai = '';


//for ciklas: Ciklas vyksta 14 kartų, kiekvieną kartą sukuriant vis mažesnį kvadratą:
for (let i = 0; i < 14; i++) {

    //f Kiekvienam kvadratui sugeneruojama atsitiktinė spalva, naudojant randomColor() funkciją:
    let kvadratoSpalva = randomColor();
    //Kvadrato dydis sumažinamas 20 pikselių, todėl kiekvienas kitas:
    kvadratas -= 20;

//    //background-color: ${kvadratoSpalva};: Priskiria atsitiktinę spalvą.
// width ir height: Nustato kvadrato dydį, naudojant kvadratas kintamąjį.
// position: absolute;: Kvadratai išdėstomi vienas ant kito viršuje, nes jie yra „absoliučiai“ pozicionuojami:

    visiKvadratai += `<div style="background-color: ${kvadratoSpalva}; width: ${kvadratas}px; height: ${kvadratas}px; margin: auto; position: absolute;"></div>`;

}
//innerHTML priskiria visą suformuotą HTML fragmentą (visiKvadratai) prie #uzd7 elemento, kad visi 14 kvadratų būtų pridedami prie puslapio:
septintaUzduotis.innerHTML = visiKvadratai;
}

drawNestedSquares();

//8 Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle


const uzd8 = document.querySelector ('#uzd8');

let kvadrat = '';

for (let i = 0; i < 41; i++) { // Išorinis ciklas 41 eilutei
    
    for (let j = 0; j < 41; j++) { // Vidinis ciklas 41 simboliui kiekvienoje eilutėje
        kvadrat += `<span>&#9632;</span>`;
    }
    kvadrat += `<br>`;
   
}

uzd8.innerHTML = kvadrat;


//9 Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite atitinkamus simbolius). #ciklasCikle

//tesinys 8tos:

let kvadratSuIstrizainem = '';

for (let i = 0; i < 41; i++) { 

    let pirmasGeltonas = i;
    let paskutinisGeltonas = 40 -i;

    for (let j = 0; j < 41; j++) { 
   

        if( j=== pirmasGeltonas || j === paskutinisGeltonas ){
            kvadratSuIstrizainem += `<span style ="color:yellow">&#9632;</span>`
        }
        else kvadratSuIstrizainem += `<span style ="color:green">&#9632;</span>`
    }
    kvadratSuIstrizainem += `<br>`;
   
}

uzd8.innerHTML = kvadratSuIstrizainem;

//10 Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun
