console.log('app.js');

//1. Nuspalvinti Visus žodžius iš NR1 sekcijos raudonai. Naudoti forEach. 


const nr1 = document.querySelectorAll('#nr1 div');

nr1.forEach( div => div.style.color = 'crimson');



// 2. Nuspalvinti visus žodžius iš NR1 sekcijos mėlynai., kurie prasideda raide "J". Naudoti forEach.

// const words = document.querySelectorAll("#nr1 div");

// // Iteruojame per kiekvieną div elementą
// words.forEach(word => {
//     // Jei žodis prasideda raide "J", pakeičiame jo spalvą į mėlyną
//     if (word.innerText.startsWith("J")) {
//         word.style.color = "blue";
//     }
// });

//viena eilute:

document.querySelectorAll("#nr1 div").forEach( div => div.innerText [0]  =='J'&& (div.style.color = 'skyblue'));



const obj = {
    person: {
        name: 'Jonas',
        age: 99,
        car: {
            model: 'Volvo'
        }
    }
};

//prieiname prie tam tikro obj, siuo atveju medel Volvo:
console.log(obj.person.car.model);

// 3. Nuspalvinti visus skaičius iš NR2 sekcijos mėlynai, kurie yra didesni nei 10. Naudoti forEach.



document.querySelectorAll("#nr2 div").forEach (div => {
      if (div.innerText > 10){
        
        div.style.color = 'skyblue'}
        
        });


        // 4. Prie visų skaičių iš NR2 sekcijos pridėti 7. Naudoti forEach.
        document.querySelectorAll("#nr2 div").forEach (div => {
            div.innerText = parseInt(div.innerText) + 7;
            });
//-------------------------------------------------------------------------



const I = document.querySelector('#I');
const Ia = document.querySelector('#Ia');
 
I.innerHTML = '<h2 style="color: skyblue;">Bebras1</h2>';
Ia.innerHTML = '<h2 style="color: skyblue;">Bebras1</h2>';
 
const II = document.querySelector('#II');
const IIa = document.querySelector('#IIa');
 
const h2 = document.createElement('h2');
h2.style.color = 'skyblue';
const text = document.createTextNode('Bebras2');
h2.appendChild(text);
 
 
 
II.appendChild(h2);
IIa.appendChild(h2);

// funkcija clone:

const h2Clone = h2.cloneNode(true); //true

II.appendChild(h2);
IIa.appendChild(h2Clone);


//--------------------------------

const mas1 = [1, 2, 3, 4, 5];

mas1.forEach((el, i) => { console.log(i,el)});

const mas2 = mas1.map (el => {
    return el * 2 ;
});


const mas3 = mas1.filter(el => {
    return el > 2;
});
 
console.log(mas3);


mas1.push('Jonas'); //push ideda i masyvo0 gala


mas1.unshift ('Ona','Petras'); //Unshift ideda i masyvo pradzia

mas1.pop(); //isimas is masyvo elementa

mas1.shift();

console.log(mas1);


mas1Without3 = mas1.filter(el => el !=3); //elementas ismetamas su filter pagalba

console.log(mas1Without3);

