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

    // 3.

    // const fun3 = (a,b) => 