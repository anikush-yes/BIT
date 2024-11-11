//1. Ar reikia kiekvienam li sukurti klase, kas irasytu kiekviena gyvuna i atitinkama li? Net nežinau nuo ko pradėti!!

//Uzduotis1. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const ulElement = document.querySelector('.listGyvunai'); //randame sąrašą

A.forEach(gyvunai => { // naudojame forEach funkcija, CIKLAS
    const liElement = document.createElement('li'); //sukuriame li elementą
    liElement.textContent = gyvunai; //priskiria gyvuno pavadinima
    ulElement.appendChild(liElement); //prideda li i ul
});

//padariau klaidą vietoje li class priskyriau ul id. Kodėl veikia tik su class??? Nes nemokejau selectint clases!!

//2.

//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

//teko googlint..

// const ASortedAbc = A.sort (); //neveike kol nepridejau tasko po A

// console.log(ASortedAbc);

const sortedListAbc = document.querySelector('#sortedAbc');


const ASortedAbc = A.sort(); // galima kitaip paprasciau

ASortedAbc.forEach(sortedGyvunaiAbc => {
    const liSorted = document.createElement('li');
    liSorted.textContent = sortedGyvunaiAbc; // kam sita eilute nesuprantu
    sortedListAbc.appendChild(liSorted);
});

//3 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const sortedAirB = document.querySelector('#sortedAirB');

// mano supratimu reikia apjungti abu masyvus ir juos surūšiuoti, kaip vieną. Teko ieškoti sintaksės aprašymo.

const allSortedAnimals = [...A, ...B].sort();

//pridedu li elementus:

allSortedAnimals.forEach(animal => {
    const li = document.createElement('li');
    li.textContent = animal;
    sortedAirB.appendChild(li);
});


//4. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

const section = document.querySelector('.circleAnimalIn');

A.forEach(animal => {
    const div = document.createElement('div');
    div.classList.add('circle');
    div.textContent = animal;
    section.appendChild(div);
});

//5. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

const section2 = document.querySelector('.circleRedAnimalIn');

B.forEach(animal => {
    const div = document.createElement('div');
    div.classList.add('circleRed');
    div.textContent = `${animal} (Žodis turi:${animal.length} r.)`;
    section2.appendChild(div);

})

//6. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.


const section3 = document.querySelector('.circlesGreenAnimalIn');

A.forEach(animal => {
    if (animal.split(' ').length === 1) {  // Tikriname, ar gyvūnas turi tik vieną žodį
        const div = document.createElement('div');
        div.classList.add('circleGreen');
        div.textContent = `${animal}`;
        section3.appendChild(div);
    }
})
//7. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle


const section4 = document.querySelector('.circlesYellowLettersIn');

B.forEach(animal => {
    // Kiekvieną gyvūno pavadinimą skaidome į raides
    for (const letter of animal) {
        const span = document.createElement('span');
        span.classList.add('circleYellow');
        span.textContent = letter;
        section4.appendChild(span);
    }
});

//8. Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];

const ulElementLessSix = document.querySelector('#animallengthLessSix');
const ulElementSix = document.querySelector('#animallengthSix');


C.forEach(animal => {
    const li = document.createElement('li');
    li.textContent = animal;

    // Jei pavadinimas ilgesnis nei 6 raidės, dedame į ulElementLessSix, kitaip į ulElementSix
    if (animal.length <= 6) {
        ulElementLessSix.appendChild(li);
    } else {
        ulElementSix.appendChild(li);
    }
});

//9. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.


const ulElemenNoDogs = document.querySelector('#noDogs');


// Filtruojame gyvūnus, kurių pavadinimas neturi "Šuo"
const filteredAnimals = C.filter(animal => !animal.includes('Šuo'));

// Sukuriame li elementus ir pridedame juos į ul
filteredAnimals.forEach(animal => {
    const li = document.createElement('li');
    li.textContent = animal;
    ulElemenNoDogs.appendChild(li);

});

