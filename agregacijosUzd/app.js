const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

//1. Surasti didžiausią skaičių su for:


// Pradinė didžiausio skaičiaus reikšmė – pirmasis masyvo elementas:
let max = A [0];

// Pereiname per kiekvieną masyvo elementą:

for (let i = 1; i < A.length; i++) {
    if (A[i] > max){
        max = A[i]; // Jei dabartinis skaičius yra didesnis, atnaujiname max
    }
}
console.log("Didžiausas skaičius:", max);
uzd1For.innerText = "Surasti didžiausią skaičių naudojant for. Didžiausas skaičius:" + max;

//1. Surasti didžiausią skaičių su ForEach:

let maxForEach = A[0];

A.forEach(num => {
    if (num > maxForEach)
        maxForEach = num;
});

console.log("Didžiausas skaičius:", maxForEach);
uzd1ForEach.innerText = "Surasti didžiausią skaičių naudojant ForEach. Didžiausas skaičius:" + maxForEach;


//----------------------------------------------------------------------------------------------------------------------

//2 Surasti mažiausią skaičių naudojant for.

let min = A [0];


for (let i = 1; i < A.length; i++) {
    if (A[i] < min){
        min = A[i]; // Jei dabartinis skaičius yra didesnis, atnaujiname max
    }
}
console.log("Mažiausias skaičius:", min);
uzd2For.innerText = "Surasti mažiausią skaičių naudojant for. Mažiausias skaičius:" + min;

//2 Surasti mažiausią skaičių naudojant ForEach:

let minForEach = A[0];

A.forEach (num =>
    { if (num < minForEach)
        minForEach = num;

})

uzd2ForEach.innerText = "Surasti mažiausią skaičių naudojant ForEach. Mažiausias skaičius:" + minForEach;
console.log("Mažiausias skaičius:", minForEach);

//--------------------------------------------------------------------------------------------------------------

//3. Surasti didžiausią neigiamą skaičių naudojant For:

let maxNegative = null; // Pradžioje jokių neigiamų skaičių nerasta

for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) { // Tikriname, ar skaičius neigiamas
        if (maxNegative === null || A[i] > maxNegative) {
            maxNegative = A[i]; // Randame didžiausią neigiamą skaičių
        }
    }
}

console.log("Didžiausias neigiamas skaičius:", maxNegative);
uzd3For.innerText = "Surasti didžiausią neigiamą skaičių naudojant For. Mažiausias skaičius:" + maxNegative;


//Naudojant for each:

const uzd3ForEach = document.getElementById("uzd3ForEach")

let maxNegativeForEach = -Infinity; // -Infinity; Nustatome pradžinę vertę su -Infinity,kad pirmas neigiamas skaičius būtų didesnis už ją.

A.forEach(num => {
    if (num < 0 && num > maxNegativeForEach) {
        maxNegativeForEach = num;
    }
});

uzd3ForEach.innerText = "Surasti didžiausią neigiamą skaičių naudojant ForEach: " + maxNegativeForEach;
console.log("Didžiausias neigiamas skaičius:", maxNegativeForEach);

//----------------------------------------------------------------------------------------------------------------------
//4. Surasti didžiausią skaičių, kuris yra mažesnis už 50 naudojant For;

let maxNumber = -Infinity; // Pradinė reikšmė - labai maža

for (let i = 0; i < A.length; i++) {
    if (A[i] < 50 && A[i] > maxNumber) {
        maxNumber = A[i]; // Atnaujinkite reikšmę, jei skaičius mažesnis už 50 ir didesnis už dabartinį max
    }
}

console.log("Didžiausias skaičius mažesnis už 50 yra:", maxNumber);
document.getElementById("uzd4For").innerText = "Didžiausias skaičius mažesnis už 50 yra: " + maxNumber;

// Surasti didžiausią skaičių, kuris yra mažesnis už 50 naudojant ForEach;

let maxNumberLess = -Infinity;

// Naudojame forEach ciklą
A.forEach((number) => {
    if (number < 50 && number > maxNumberLess) {
        maxNumberLess = number;
    }
});

// Pakeičiame elemento su ID "uzd4For" tekstą į rezultatą
document.getElementById("uzd4ForEach").innerText = "Didžiausias skaičius mažesnis už 50 yra: " + maxNumberLess;