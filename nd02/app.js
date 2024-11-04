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