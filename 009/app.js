//1. Sukurtu funkcija, kuri priiima du kintamuosius ir grazina didesni.

// function rand(min, max) {
// 	const minCeiled = Math.ceil(min);
// 	const maxFloored = Math.floor(max);
// 	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// }

// const kintamasis1 = rand (0, 100);
// const kintamasis2 = rand (0, 100);

// if (kintamasis1 > kintamasis2) {

//     randomOne.innerHTML = kintamasis1
    

const fun1 = (a,b) => {
    const rez = (a > b) ? a : b;
    return rez;
}

console.log(fun1(35,50));

//2. Sukurtu funkcija, kuri priiima du stringus ir grazina trumpesni

const fun2 =  (tekstas1,tekstas2) => {

    if (tekstas1.length < tekstas2.length)
        return tekstas1; 
    return tekstas2;

    
    }

    console.log(fun2('Labas', 'Viso gero'));

    // 3. Sukurti funkciją, kuri priima 2 kintamuosius. Jeigu didesnis pirmas grąina 1, jeigu didesnis antras grąžina -1, jeigu lygūs grąžina 0.

    const fun3 = (a, b) => {
        if (a > b ) {
            return 1;
        } else if (b > a){
            return -1;
        } 
    }

    const funTer3 = (a, b) => {
        return (a > b && a != b) ? 1 : (a < b && a != b) ? -1 : 0;
    }

    console.log(fun3(8, 7));
    console.log(funTer3(3, 7));




    //sumos funkcijos
    
    function funSum1(a, b) {
        return a + b;
    }
     
    const funSum2 = function (a, b) {
        return a + b;
    }
     
    const funSum3 = (a, b) => {
        return a + b;
    }
     
    const funSum4 = (a, b) => a + b;
     
     
    console.log(funSum4(2, 3));


    function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig2 = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig3 = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig4 = (a, b) => a > b ? a : b;



//Stringo ilgis 4iais budais:

function funStrLen1(a) {
    return a.length;
}
 
const funStrLen2 = function (a) {
    return a.length;
}
 
const funStrLen3 = (a) => {
    return a.length;
}
 
const funStrLen4 = a => a.length;





function FunReturnLabas1() {
    return 'labas';
}
 
const FunReturnLabas2 = function () {
    return 'labas';
}
 
const FunReturnLabas3 = () => {
    return 'labas';
}
 
const FunReturnLabas4 = () => 'labas';


//constanta is daug skaiciu




const funSumMany1 = (a, b, ...rest) => {
    console.log(rest);
 
    let sumAll = 0;
    for (let i = 0; i < rest.length; i++) {
        sumAll += rest[i];
       
    }
    return a + b + sumAll;
}
console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];

const 