console.log('app.js');

const machines = [
    'Traktorius',
    'Kombainas',
    'Volavimo mašina',
    'Buldozeris',
    'Krautuvas',
    'Keltuvas',
    'Kranas',
    'Kompresorius',
];

// 1. Padaryti HTML, sąrašą <ul>, su class="machines-list". Naudoti forEach. createElement ir appendChild.

const ulElement = document.createElement('ul');
ulElement.className = 'machines-list';

// Kiekvienam elementui sukuriame <li> ir pridedame į <ul>
machines.forEach(machine => {
    const liElement = document.createElement('li');
    liElement.textContent = machine;
    ulElement.appendChild(liElement);
});

// Pridedame <ul> prie dokumento, pvz., prie body
document.body.appendChild(ulElement);



//2.Padaryti HTML, sąrašą <ul>, su class="machines-list-1", kuriame nebūtų "Krano" (nufiltruoti filter metodu). Naudoti forEach. createElement ir appendChild.


// Filtruojame sąrašą, pašalindami "Kraną"
const filteredMachines = machines.filter(machine => machine !== 'Kranas');

// Sukuriame <ul> elementą su klase "machines-list-1"
const ulEl = document.createElement('ul');
ulEl.className = 'machines-list-1';

// Kiekvienam filtruoto sąrašo elementui sukuriame <li> ir pridedame į <ul>
filteredMachines.forEach(machine => {
    const liEl = document.createElement('li');
    liEl.textContent = machine;
    ulEl.appendChild(liEl);
});

// Pridedame <ul> prie dokumento, pvz., prie body
document.body.appendChild(ulEl);


//3.Padaryti HTML, sąrašą <ul>, su class="machines-list-2", kuriame nebūtų "Volo" ir "Keltuvo" (nufiltruoti filter metodu).
// Prie kiekvieno aparato gale pridėti " - mašina". Naudoti map metodą.
// Naudoti forEach. createElement ir appendChild.

// const filterdMachines = machines.filter(machine => machine !== 'Volavimo mašina' && machine !== 'Keltuvas');

// // Prie kiekvieno elemento pridedame " - mašina"
// const modifiedMachines = filteredMachines.map(machine => `${machine} - mašina`);

// // Sukuriame <ul> elementą su klase "machines-list-2"
// const ul2 = document.createElement('ul');
// ulElement.className = 'machines-list-2';

// // Kiekvienam modifikuoto sąrašo elementui sukuriame <li> ir pridedame į <ul>
// modifiedMachines.forEach(machine => {
//     const li2 = document.createElement('li');
//     li2.textContent = machine;
//     ul2.appendChild(li2);
// });

// // Pridedame <ul> prie dokumento, pvz., prie body
// document.body.appendChild(ul2);


// Destytojo variantas:


const ul2 = document.querySelector('.machines-list-2');
 
machines
.filter(machine => machine !== 'Volavimo mašina' && machine !== 'Keltuvas')
.map(machine => machine + ' - mašina')
.forEach(machine => {
    const li = document.createElement('li');
    const text = document.createTextNode(machine);
    li.appendChild(text);
    ul2.appendChild(li);
});


// ---------------------------------------------------------------
// Rusiavimas: sorto metodas veikia ant oroginalo

const digits = [44, 87, 43, 0, 87, 58, 95, 21];

digits.sort((a, b) => a - b);


console.log(digits);

machines.sort((a, b ) => b.length - a.length);

console.log(machines);


machines.sort((a, b) => {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
    return 0;
});

machines.sort((a, b) => a[1].localeCompare(b[1]));

console.log(machines);