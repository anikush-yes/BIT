console.clear();


class TV {

    static programos = ['TV3', 'LRT', 'TV6', 'TV1', 'Animal planet'];

    static zinute;
    
    static rasytiZinute(zinute) {
        this.zinute = zinute;
    }

    static pridetiPrograma(programa) {
        this.programos.push(programa);
    }

    constructor(savininkas) {
        this.savininkas = savininkas;
        this.kanalas = 1;
        this.ijungta = false;
    }

    rasytiZinute(zinute) {
        this.constructor.rasytiZinute(zinute);
        // this.constructor.zinute = zinute;
    }

    skaitytiZinute() {
        console.log(this.constructor.zinute);
    }

    pakeistiKanala(kanalas) {
        if (this.ijungta) {
            this.kanalas = kanalas;
        }
    }

    ijungti() {
        this.ijungta = true;
    }

    isjungti() {
        this.ijungta = false;
    }

    info() {
        console.log('Savininkas: ' + this.savininkas + ', kanalas: ' + this.constructor.programos[this.kanalas - 1]);
    }
}

class TVSony extends TV {

    constructor(savininkas) {
        super(savininkas);
        this.model = 'Sony';
    }

    zaistiZaidima() {
        console.log('Žaidžia žaidimą');
    }

}

class TVSamsung extends TV {

    constructor(savininkas) {
        super(savininkas);
        this.model = 'Samsung';
    }

}




const tv1 = new TVSamsung('Petras');
const tv2 = new TVSony('Marytė');
const tv3 = new TVSony('Bebras');

const naujosProgramos = ['TV3', 'LRT', 'TV6', 'TV1', 'Discovery'];

TV.programos = naujosProgramos;

TV.pridetiPrograma('Child TV');


tv1.ijungti();
tv1.pakeistiKanala(6);
tv1.info();
tv1.rasytiZinute('Labas rytas');

tv2.ijungti();
tv2.pakeistiKanala(5);
tv2.info();
tv2.zaistiZaidima();

tv3.ijungti();
tv3.pakeistiKanala(5);
tv3.info();
tv3.skaitytiZinute();

const tv4 = new TVSony('Jonas');


tv4.ijungti();
tv4.pakeistiKanala(5);
tv4.info();
tv4.skaitytiZinute();