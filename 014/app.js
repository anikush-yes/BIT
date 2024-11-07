//1.

const numbers = [-150, 410, 104, 258];

//Atspausdinti visus masyvo skaičius ul tage nr1, įdėtus į <li> elementus nuo didžiausio iki mažiausio.

numbers.sort((a, b) => b - a);

// Pasirenkame ul elementą pagal jo ID
const ulElement = document.getElementById("nr1");

// Kiekvienam masyvo elementui sukuriame li elementą ir įdedame į ul
numbers.forEach(number => {
    const li = document.createElement("li");
    li.textContent = number;
    ulElement.appendChild(li);
});




//2. Html'e nupiešti kvadratą. Paspaudus ant kvadrato jis virsta į apskritimą. zPaspaudus dar kartą, vėl tampa kvadratu ir t.t.


const shape = document.getElementById("shape");

//Ši funkcija prideda „paspaudimo“ („click“) įvykio stebėtoją (event listener) mūsų shape elementui. Tai reiškia, kad kai naudotojas paspaudžia ant šio elemento, bus iškviesta čia apibrėžta funkcija:() => { ... }:  Tai yra anoniminė funkcija (funkcija be pavadinimo), kuri bus vykdoma kiekvieną kartą, kai paspausime ant shape elemento. Ši funkcija naudoja paprastą „JavaScript“ sintaksę =>, kuri leidžia rašyti funkcijas glaustai.
shape.addEventListener("click", () => {

// //shape.classList.toggle("circle"):
//  Tai yra savybė, leidžianti pridėti, pašalinti arba patikrinti shape elemento klases. Klasės – tai CSS taisyklės, kurios keičia elemento išvaizdą (pvz., .circle CSS klasė apibrėžia apskritimo formą).
// toggle("circle"): Šis metodas patikrina, ar shape elemente yra .circle klasė:
// Jei klasė .circle yra elemente, ji bus pašalinta, todėl elementas taps kvadratu.
// Jei klasės .circle nėra, ji bus pridėta, todėl elementas taps apskritimu.

    shape.classList.toggle("circle");

});

//2 destytojo variantas su kintamaisiais lietuviskai:
const div = document.createElement('div');
 
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'black';
div.style.transition = 'border-radius 0.5s';
// div.style.borderRadius = '0px';
div.dataset.figurosBusena = 'kvadratas';
 
document.body.appendChild(div);
 
div.addEventListener('click', _ => {
    if (div.dataset.figurosBusena === 'kvadratas') {
        div.style.borderRadius = '50%';
        div.dataset.figurosBusena = 'rutulys';
    } else {
        div.style.borderRadius = '0px';
        div.dataset.figurosBusena = 'kvadratas';
    }
});


//3 Sekcijoje nr2 įrašius tekstą į input laukelį ir paspaudus mygtuką, 
// tas tekstas atsiranda sekcijoje nr2, virš input laukelio.


// Pasirenkame reikiamus elementus
const inputText = document.getElementById("inputText");
const output = document.getElementById("output");
const submitButton = document.getElementById("submitButton");

// Pridedame įvykio stebėtoją mygtukui
submitButton.addEventListener("click", () => {
    // Paimame įvesties laukelio tekstą
    const text = inputText.value;

    // Priskiriame tekstą <p> elementui (output)
    output.textContent = text;

    // Išvalome įvesties laukelį
    inputText.value = "";
});

//Agregacija:
//
const mas1 = [45, 78, 98, 4, 87, 1];

//paskaiciuoti visyu masyvo elementu suma ir ja atspausdinti naudojant reduce

const suma = mas1.reduce ((total, num) => total + num, 0); //0 reiskia kad pradetu skaiciuoti nuo pradzios, total tarpine agregacija o number

console.log(suma);

//Atsispausdinti ilgoiausia zodi naudojant reduce

const mas2 = ['antis', 'višta', 'povas', 'kiaušas', 'puodas', 'šakė'];

const ilgiausias = mas2.reduce((ilgiausias, zodis) => zodis.length > ilgiausias.length ? zodis : ilgiausias, '');
 
console.log(ilgiausias);


//Atsispausdinti trumpiausia zodi naudojant reduce:


const trumpiausias = mas2.reduce((trumpiausias, zodis) => zodis.length > ilgiausias.length ? zodis : trumpiausias, mas2[0]);



 // surasti ir atspausdinti trumpiausią, bet ilgesnį nei 5 simboliai, žodį masyve with reduce

 const trumpiausiasDidesnisUz5 = mas2.reduce((trumpiausias, zodis) => {
    return (zodis.length < trumpiausias.length && zodis.length > 5) ? zodis : trumpiausias
}, mas2.find(zodis => zodis.length > 5));
 
console.log(trumpiausiasDidesnisUz5);


// naudojant filter surasti ir atspausdinti trumpiausią, bet ilgesnį nei 5 simboliai:

const temp1 = mas2.filter(zodis => zodis.length > 5);
const trumpiausiasDidesnisUz5WithFilter = temp1.reduce((trumpiausias, zodis) => zodis.length < trumpiausias.length ? zodis : trumpiausias, temp1[0]);
 
console.log(trumpiausiasDidesnisUz5WithFilter);



// naudojant forEach surasti ir atspausdinti trumpiausią, bet ilgesnį nei 5 simboliai:

let trumpiausiasDidesnisUz5WithForeache = mas2.find(zodis => zodis.length > 5);
 
mas2.forEach(zodis => {
    if (zodis.length < trumpiausiasDidesnisUz5WithForeache.length && zodis.length > 5) {
        trumpiausiasDidesnisUz5WithForeache = zodis;
    }
});
 
console.log(trumpiausiasDidesnisUz5WithForeache);

//naudojant For surasti ir atspausdinti trumpiausią, bet ilgesnį nei 5 simboliai:


let trumpiausiasDidesnisUz5WithForOnly = mas2[0];
 
for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length > 5) {
        trumpiausiasDidesnisUz5WithForOnly = mas2[i];
    }
}
 
for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length < trumpiausiasDidesnisUz5WithForOnly.length && mas2[i].length > 5) {
        trumpiausiasDidesnisUz5WithForOnly = mas2[i];
    }
}
 
console.log(trumpiausiasDidesnisUz5WithForOnly);
