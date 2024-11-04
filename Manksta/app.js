
const uzduotis1 = document.querySelector(".select1")
const uzduotis2 = document.querySelector(".select2")
const uzduotis3 = document.querySelector(".select3")
const uzduotis4 = document.querySelector(".select4")
const uzduotis5 = document.querySelector(".select5")
const uzduotis6 = document.querySelector(".select6")
const uzduotis7 = document.querySelector(".select7")
const uzduotis8 = document.querySelector(".select8")
const uzduotis9 = document.querySelector(".select9")
const uzduotis10 = document.querySelector(".select10")




const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log("veikia");

//1

const skaicius = rand(-1000, 1000);

console.log(skaicius);


if (skaicius>0) {
    uzduotis1.innerText = `Skaičius ${skaicius} yra teigiamas`
    
}

else if (skaicius<0) 
{
    uzduotis1.innerText = `Skaičius ${skaicius} yra neigiamas`
    
}

else {
    uzduotis1.innerText = `Skaičius ${skaicius} yra nulis`
}


//2

const skaiciusAntras = rand(0,1000);

console.log(skaiciusAntras);


if (skaiciusAntras % 2 === 0 ) {

    uzduotis2.innerText = `Skaičius ${skaiciusAntras} yra lyginis`

}

else {

    uzduotis2.innerText = `Skaičius ${skaiciusAntras} yra nelyginis`
}

//3

const temp = rand(-30,100);

if(temp < 0) {
    uzduotis3.innerText = `temperatūra ${temp} yra neigiama`
}

else if  (temp>=0 || temp<=30)
{
uzduotis3.innerText = `temperatūra ${temp} yra tarp nulio ir trisdešimties`

}

else {

    uzduotis3.innerText = `temperatūra ${temp} getting hot`
}



//4
// 

// Užduotis 4: Amžiaus tikrinimas
// Aprašymas: Sukurk kintamąjį amzius ir patikrink, ar amžius yra mažesnis nei 18, tarp 18 ir 65, ar virš 65. Atspausdink rezultatą.
// Pavyzdys: Jei amzius = 70, konsolėje turėtų atsirasti tekstas „Asmuo yra pensinio amžiaus“.
 

const age = rand(1,105);

if(age < 18) {

    uzduotis4.innerText = `asmuo ${age} metų yra nepilnametis`
}

else if (age>= 18 || age<=65) {

    uzduotis4.innerText = ` ${age} metų asmuo skaitomas darbingo amžiaus`
}

else {

uzduotis4.innerText = ` ${age} metų asmuo yra pensinio amžiaus`

}



//5

const skaicius5 = rand(1000, 2000);
const skaicius50 = rand(1000, 2000);

console.log(skaicius5, skaicius50);

if (skaicius5>skaicius50) {
    uzduotis5.innerText = `Skaičius ${skaicius5} yra didesnis už ${skaicius50}`
 
}

else if (skaicius5<skaicius50) {
    uzduotis5.innerText = `Skaičius ${skaicius50} yra didesnis už ${skaicius5}`
 
}

else {

    uzduotis5.innerText  = `Skaičius ${skaicius5} yra lygus ${skaicius50}`
}

//6
// 

// Užduotis 6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.

const suma = rand(1, 1000);

console.log(suma);

if (suma<100) {

    uzduotis6.innerText = `Kiekis ${suma} yra mažesnis 100, įsigyk daugiau prekių`
}

else if (suma<=500)
{
uzduotis6.innerText = `Kiekis siekia ${suma} Jūs gaunate nuolaidą!`

}

else {
    uzduotis6.innerText = `Kiekis siekia ${suma} Jūs gaunate papildomą dovaną!`
}

//7
// 
// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.

const vardas = rand(1,7);

let vardas1 = "Jonai!";
let vardas2 = "Marytė!";


if (vardas === 1){

    uzduotis7.innerText =`Labas, ${vardas1}`
}

else if (vardas === 2) {

    uzduotis7.innerText =`Labas, ${vardas2}`

}

else  {

    uzduotis7.innerText = `Labas, vardas!`
    }

    

//8
// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas zdidesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.
 

const rezultatas = rand(0,100);


if (rezultatas >= 90) {
    uzduotis8.innerText = `Rezultatas yra ${rezultatas}. Puiku!`
}

else if (rezultatas >= 60 & rezultatas <= 89 ) {
    uzduotis8.innerText = `Rezultatas yra ${rezultatas}. Gerai!`
}

else {

    uzduotis8.innerText = `Rezultatas yra ${rezultatas}. Nepakanka!`
    }


    
// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.



function getRandomTime() {
    const hours = Math.floor(Math.random() * 24); // Random hour between 0 and 23
    const minutes = Math.floor(Math.random() * 60); // Random minute between 0 and 59
    const seconds = Math.floor(Math.random() * 60); // Random second between 0 and 59

    // Format hours, minutes, and seconds as two-digit numbers
    const formattedTime = [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0')
    ].join(':');

    return formattedTime;
}

const randomTime = getRandomTime();

console.log(`Dabar yra: ${randomTime}`);

if (randomTime >= '09:00:00' & randomTime <='17:00:00') {
    uzduotis9.innerText =(`Dabar yra ${randomTime}. Laikas dirbti!`);

} else {
    uzduotis9.innerText =(`Dabar yra ${randomTime}. Laikas ilsėtis`);
}




// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.
 


const studentas1 = rand(0,100);
console.log (`Studentas1 gavo: ${studentas1}`);

const studentas2 = rand(0,100);
console.log (`Studentas2 gavo: ${studentas2}`);


if (studentas1 > studentas2) {
    uzduotis10.innerText =(`Pirmas studentas gavo ${studentas1}, antras gavo ${studentas2}, pirmas gavo daugiau.`)
}

else {
    uzduotis10.innerText =(`Pirmas studentas gavo ${studentas1}, antras gavo ${studentas2}, antras gavo daugiau.`)
}