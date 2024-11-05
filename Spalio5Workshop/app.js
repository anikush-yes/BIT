let array = [1, 2, 3, 4, 5] // [] sitie skliaustai skirti masyvui



// for kvadraciukas iskviacia viso ciklo aprasyma:
for (let i = 0; i < array.length; i++) { 
    
    //++ reiskia eiti po viena zingsni skaitomas+1
    const element = array[i];
    console.log (element);
}


 
// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){ //% 2 daliname is 2 === pasirenkam lyginius skaicius

    console.log(numbers[i]);
    }
    
}
 
// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.


let words = ["apple", "banana", "kiwi", "watermelon", "pear"];

words.forEach(word => { //Naudojame forEach metodą, kad iteruotume per kiekvieną žodį masyve words.
    if (word.length > 5) {
        console.log(word);
    }
});
 
 
// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 
let divisibleByThree = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        divisibleByThree.push(numbers[i]);
    }
}

console.log(divisibleByThree);


// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.

let num = [4, -3, 2, -1, 0, -5, 8, -9];
 
let negativeNumbers = [];

for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
        negativeNumbers.push(num[i]);
    }
}
console.log(negativeNumbers);


 
// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.

let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];
 
let javascriptSentences = [];

for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].includes("JavaScript")) {
        javascriptSentences.push(sentences[i]);
    }
}

console.log(javascriptSentences);

 
// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.

let nmbr = [2, 5, 7, 8, 10, 12];
 
let largeSquares = nmbr.filter(nmbr => nmbr * nmbr > 50);

console.log(largeSquares);


 
// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
// let numbers = [3, 45, 23, 67, 12, 90, 34];
 
 
 
 
// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.
// let word = "banana";
 
 
// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
// let ages = [12, 17, 22, 19, 15, 30, 18];
 
 
 
// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
// let numbers = [5, 8, 13, 22, 31, 40];
 