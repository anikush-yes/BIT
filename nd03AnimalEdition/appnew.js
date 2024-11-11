//10.Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

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

function displayAnimals() {
    // Panaudojame kintamuosius ekrano pločiui ir aukščiui
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Atsitiktinė raidžių dydžio skalė, priklausomai nuo ekrano dydžio
    const minFontSize = 10;
    const maxFontSize = 100;

    // Kiekvienam gyvūnui pasikartosime pagal dydį ir atsitiktinai paskirstysime vietą
    for (let i = 0; i < 10; i++) {
        C.forEach(animal => {
            // Sukuriame gyvūno pavadinimą
            const animalElement = document.createElement('div');
            animalElement.textContent = animal;

            // Atsitiktinis raidžių dydis priklausomai nuo ekrano dydžio
            const fontSize = rand(minFontSize, maxFontSize) + 'px';
            animalElement.style.fontSize = fontSize;

            // Atsitiktinė raidžių spalva
            animalElement.style.color = randomColor();

            // Užtikrinti, kad pavadinimai būtų paskirstyti visame ekrane
            const maxX = screenWidth - parseInt(fontSize)  - 200; // Atimame 20px, kad būtų vietos kraštuose
            const maxY = screenHeight - parseInt(fontSize)  - 5; // Atimame 20px, kad būtų vietos kraštuose


            const x = rand(0, maxX); // Atsitiktinė X pozicija
            const y = rand(0, maxY); // Atsitiktinė Y pozicija


            animalElement.style.position = 'absolute'; // Apskritai nustatykite kaip "absolute"
            animalElement.style.left = `${x}px`;
            animalElement.style.top = `${y}px`;

            // Atsitiktinė animacijos trukmė:
            const duration = rand(2, 5) + 's';
            animalElement.classList.add('animal'); //pagaliau supratau kur iterpti, sukurtas elementas pries paleidziant animacija turejo gauti animal klase.
            animalElement.style.animationDuration = duration;


            // Pridedame elementą į body
            document.body.appendChild(animalElement);
        });
    }
}

displayAnimals();
