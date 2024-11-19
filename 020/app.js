//objektinis programavimas

console.log('Hello')

const obj = {
    name: 'Mario',
    age: 32,
    job: 'plumber'
}

console.log(obj);



//norint sukurti objekta reikia sukurti objekto plana, clase yra tiesiog planas kas turi buti objekte

//koda raso vienas:

class PlayCharacter {

    constructor(name, age, job, lives = 3) { //Constructor konstruoja objekta
        this.name = name;
        this.age = age;
        this.job = job;
        this.speed = 10;
        this.strength = this.age * 2;
        this.lives = lives;
    }

}
// o si koda raso kitas zmogus, prieina prie tam tikru duomenu

const obj1 = new PlayCharacter('Mario', 32, 'plumber'); // new paleidzia construktoriu
const obj2 = new PlayCharacter('Luigi', 30, 'plumber', 10);

console.log(obj1, obj2);


// koda pvz raso 1mas:

class TV {

    #channel = 1 //paslepia nuo kaitaliojimo

    constructor(price, owner) {
        this.brand = 'Samsung';
        this.model = 'UE55NU7172UXXH';
        this.year = 2018;
        this.price = price;
        this.owner = owner;
        this.channel = 1;
        this.turnOn = false;
    }
    ijungti() {
        this.turnOn = true
        console.log(this.owner + 'turning on the TV and watching channel' + this.#channel);
    }


    isjungti() {
        this.turnOn = false;
        console.log(this.owner + ' turning off the TV');

    }

    //seteris:

    perjungtiKanala(channel) {
        if (!this.turnOn) {
            return;
        }

        if (channel < 1 || channel > 100) {
            console.log('Invalid channel');
            return;
        }
        this.#channel = channel;
        console.log(this.owner + 'changing the channel' + this.#channel);
    }

    //geteris
    ziuretiInformacija() {
        return this.#channel;
    }
}
//koda raso antras:

const tv1 = new TV(400, 'Petras');
const tv2 = new TV(600, 'Jonas');

console.log(tv1, tv2);

let info = tv2.ziuretiInformacija();
info++;

tv1.perjungtiKanala(info);

tv2.ijungti();

tv2.isjungti();



