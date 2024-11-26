//1. 
//Objektiniai uždaviniai

//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.


class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0; // Pradinė akmenų kiekio reikšmė
    }

    // Metodas pridedantis vieną akmenį
    prideti1Akmeni() {
        this.akmenuKiekis += 1;
    }

    // Metodas pridedantis daug akmenų
    pridetiDaugAkmenu(kiekis) {
        if (kiekis > 0) {
            this.akmenuKiekis += kiekis;
        } else {
            console.log("Kiekis turi būti teigiamas!");
        }
    }

    // Metodas, išvedantis kiek surinkta akmenų
    kiekPririnktaAkmenu() {
        console.log(`Kibire yra ${this.akmenuKiekis} akmenų.`);
    }
}

// Sukuriame vieną kibiro objektą
const manoKibiras = new Kibiras1();

// Pademonstruojame funkcionalumą
manoKibiras.prideti1Akmeni(); // Pridedame 1 akmenį
manoKibiras.pridetiDaugAkmenu(10); // Pridedame 10 akmenų
manoKibiras.kiekPririnktaAkmenu(); // Išvedame kiekį

// manoKibiras.pridetiDaugAkmenu(-5); // Netinkamas kiekis, turėtų parodyti klaidą
// manoKibiras.kiekPririnktaAkmenu(); // Patikriname, kad klaidingas įrašas neveikia

//2

//Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.


class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;

    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        }
        else {
            this.popieriniaiPinigai += kiekis
        }
    }

    skaicioti() {

        //    let suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log(`Suma metalinių pinigu: ${this.metaliniaiPinigai}, Popierinių pinigų suma:${this.popieriniaiPinigai} `)
    }
}
const pinigineSuma = new Pinigine();
pinigineSuma.ideti(1);
pinigineSuma.ideti(1);
pinigineSuma.ideti(1);
pinigineSuma.ideti(5);
pinigineSuma.ideti(10);
pinigineSuma.skaicioti();


//3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.


class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        if (keleiviuSkaicius >= 0) {
            this.keleiviuSkaicius += keleiviuSkaicius
        } else {
            console.log('Įrašykite teigiamą keleivių skaičių');
        }
    }

    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius < this.keleiviuSkaicius) {
            if (keleiviuSkaicius >= 0) {
                this.keleiviuSkaicius -= keleiviuSkaicius
            } else {
                console.log('Įrašykite teigiamą keleivių skaičių');
            }
        } else {
            console.log('Išlipti negali žmonių daugiau, negu yra troleibuse');
        }
    }

    vaziuoja() {
        console.log(`Troleibuse važiuoja ${this.keleiviuSkaicius} žmonių`);
    }

}

const keleiviuSk = new Troleibusas();

keleiviuSk.ilipa(10);
keleiviuSk.islipa(5);
keleiviuSk.ilipa(3);
keleiviuSk.vaziuoja();

//4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibus {

    static visiKeleiviai = 0;

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('Viso yra:' + this.visiKeleiviai);
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius
    }

    constructor() {

        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {

        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.visiKeleiviai += keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {

        const liko = Math.max(this.keleiviuSkaicius - keleiviuSkaicius, 0);

        this.constructor.bendrasKeleiviuSkaicius(liko - this.keleiviuSkaicius);

        this.keleiviuSkaicius = liko;
    }



}

const troleibus1 = new Troleibus();
troleibus1.ilipa(5);
troleibus1.islipa(2);
troleibus1.ilipa(3);


const troleibus2 = new Troleibus();
troleibus2.ilipa(5);
troleibus2.islipa(2);
// troleibus2.ilipa(3);

Troleibus.keleiviuSkaiciusVisuoseTroleibusuose()




//-------------------------------------------------------------------------------
//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.


class Stikline {

    constructor(turis) {
        this.kiekis = 0;
        this.turis = turis;
    }
    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }

    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }
    stiklinejeYra() {
        console.log(`Stiklineje, kurios tūris ${this.turis} yra ${this.kiekis} skysčio`);
    }

}

const stikline100 = new Stikline(100);
const stikline150 = new Stikline(150);
const stikline200 = new Stikline(200);


stikline100.ipilti(stikline150.ipilti(stikline200.ipilti(500).ispilti()).ispilti());

stikline100.stiklinejeYra();
stikline150.stiklinejeYra();
stikline200.stiklinejeYra();


//Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).


class Grybas {


    constructor() {
        this.svoris = this.#rand(5, 45);
        this.valgomas = !this.#rand(0, 1);
        this.sukirmijes = !this.#rand(0, 1);
    }

    #rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

}

class Krepsys {

    constructor() {
        this.prideta = 0;
        this.dydis = 500;
    }

    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prideta += grybas.svoris;
        }
        return 500 > this.prideta;

    }
}

const krepsys = new Krepsys();

do { } while (krepsys.deti(new Grybas()));

console.log(krepsys);

//----------------------------------


//Map, panasus i masyva



const manoMap = new Map();
 
manoMap.set('vardas', 'Jonas'); // key, value
manoMap.set('pavarde', 'Jonaitis');
manoMap.set('amzius', 99);
manoMap.set({a: 1}, 'Petras');
manoMap.set('vardas', 'Jolanta');
manoMap.set({a: 1}, 'Antanas');
manoMap.set(function(){return 2}, 'Jonas');
manoMap.set([1, 2, 3], 'Jonas');
manoMap.delete('vardas');
 
console.log(manoMap.size);
 
console.log(manoMap);
 
console.log(manoMap.get('vardas')); // Jolanta
console.log(manoMap.get({a: 1}));
 
const objektas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 99
};
 
console.log(objektas);
 
manoMap.forEach((value, key) => {
    console.log(key, value);
});
