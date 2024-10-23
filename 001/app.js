
console.log('Hello Bebrai!');

console.log(4 + 5 * 7);


// var kintamojo deklaracija, retai nenaudojama, nesdubliojasi vienodi vardai vardu priskirymo budas, turi buti unikalus ir prasmingas, kad orientuotis kode lengviau

const manoPirmasSkaicius = 42;
const manoAntrasSkaicius = 3.14;

let manoPirmojiSuma = manoPirmasSkaicius + manoAntrasSkaicius;
// console.log(manoPirmojiSuma);

manoPirmojiSuma = manoPirmojiSuma + 100;


// console.log('%c' + manoPirmojiSuma, 'color: red; font-size: 20px;');





// deklaruojam su let ir const deklaracijom

// sugalvoju kintamuosius -> deklaruojam su let arba  const-> duodame reksmes->paleidziam i konsole console.log()


{

    let manoPirmojiSuma = 'Labas';
    console.log(manoPirmojiSuma); 

    {
let manoPirmojiSuma = 'Viso gero';
console.log(manoPirmojiSuma);

    }


}

console.log(manoPirmojiSuma, typeof manoPirmojiSuma)

let koksTipas1 = 1 + 1;
let koksTipas2 = 1 + '1';
koksTipas2 = koksTipas2 + 2;

console.log ( koksTipas1, typeof koksTipas1);
;


// tipai numeriai ir stringai-tekstas

// skliausteles reiskia kad reiksme yra objektas
const as = {}; 

// pavardes siuo atveju yra kintamojo "as" reiksme-objektas, kuria galima keisti, pacio kintamojo ne

as.vardas = 'Jonas'; 
as.pavarde = 'Jonaitis';
as.pavarde = 'Petraitis';

as.apie = {}

as.apie.amzius = 99;
as.apie.miestas = 'Vilnius';

console.log ( as, typeof as);

console.log (document);



const ManoH1 = document.querySelector ('h1');

ManoH1.innerText = manoPirmojiSuma;

// console.log (ManoH1);

ManoH1.style.color = 'crimson';

