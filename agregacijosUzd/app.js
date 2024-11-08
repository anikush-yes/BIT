const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

//1. Surasti didžiausią skaičių su if:


// Pradinė didžiausio skaičiaus reikšmė – pirmasis masyvo elementas:
let max = A [0];

// Pereiname per kiekvieną masyvo elementą:

for (let i = 1; i < A.length; i++) {
    if (A[i] > max){
        max = A[i]; // Jei dabartinis skaičius yra didesnis, atnaujiname max
    }
}
console.log("Didžiausas skaičius:", max);
// document.getElementById("uzd1If").textContent = "Surasti didžiausią skaičių naudojant if. Didžiausas skaičius:" + max;
//arba:
uzd1If.innerText = "Surasti didžiausią skaičių naudojant if. Didžiausas skaičius:" + max;

//1. Surasti didžiausią skaičių su ForEach:

let maxForEach = A[0];

A.forEach(num => {
    if (num > maxForEach)
        maxForEach = num;
});

console.log("Didžiausas skaičius:", maxForEach);
uzd1ForEach.innerText = "Surasti didžiausią skaičių naudojant ForEach. Didžiausas skaičius:" + maxForEach;

//2

