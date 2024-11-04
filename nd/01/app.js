console.log('Pradedam');
//1

const tagH1 = document.querySelector('h1')
const tagH2 = document.querySelector('h2')
const tagH3 = document.querySelector('h3')
const tagH4 = document.querySelector('h4')


tagH1.innerText = 1;
tagH2.innerText = 2;
tagH3.innerText = 3;
tagH4.innerText = 4;

//2

const div1 = document.querySelector('div:nth-of-type(1)');
div1.style.width = '20px';
div1.style.height = '20px';
div1.style.backgroundColor = 'blue';

const div2 = document.querySelector('div:nth-of-type(2)');
div2.style.width = '20px';
div2.style.height = '20px';
div2.style.backgroundColor = 'red';
div2.style.borderRadius = '50%';

//3

// Random funcija bendrą visam JS":


function rand(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const randomOne = document.querySelector("#go3 > span:nth-child(1)");
const randomTwo = document.querySelector("#go3 > span:nth-child(2)");
const result = document.querySelector("#go3 > span:nth-child(3)");


const pirmas = rand(0, 5);
const antras = rand(0, 5);

if (pirmas > antras) {
	randomOne.innerHTML = pirmas;
	randomTwo.innerHTML = antras;
	if (pirmas == 0 || antras == 0) {
		result.innerHTML = 0;
	}

	else {
		result.innerHTML = pirmas / antras;
	}
}

else if (pirmas < antras) {
	randomOne.innerHTML = antras;
	randomTwo.innerHTML = pirmas;
	if (pirmas == 0 || antras == 0) {
		result.innerHTML = 0;
	}

	else {
		result.innerHTML = antras / pirmas;
	}
}

else {

	randomOne.innerHTML = pirmas;
	randomTwo.innerHTML = antras;

	if (pirmas == 0 || antras == 0) {
		result.innerHTML = 0;

	}

	else {
		result.innerHTML = pirmas / antras;
	}

}

//paklausti destytojo del vietoj infinity error irasymo:

// if (b === 0) {
// 	// Avoid division by zero
// 	return 'Error: Division by zero is not allowed';

// element[2].innerHTML = res;
// element[2].innerHTML = 0;



//Rokas:
//tavo atveju tu panaudojai getElementByTagName, kad išsiimtum tuos elemzentus (spanus) į vieną kintamąjį "element". Kintamasis su keliomis reikšmėmis vadinamas masyvu. Dėstytojas mūsų dar to nemokė, todėl būtų paprasčiau taip daryt:
// const span1 = document.querySelector('#go3 span:nth-of-type(1)');
// const span2 = document.querySelector('#go3 span:nth-of-type(2)');
// const span3 = document.querySelector('#go3 span:nth-of-type(3)');
// Ir tada po visų skaičiavimų:
// span1.innerText = pirmasKintamasis;
// span2.innerText = antrasisKintamasis;
// span3.innerText = res;
// innerText verčiant iš anglų tiesiogiai gaunasi "vidinis tekstas"
// innerHTML pagrinde skiriasi tuo, kad jame yra ne tik elementų tekstas, bet ir visi juose esantys tagai.


//4

function code4() {
	const sizes = [];
	sizes[0] = rand(50, 200);
	sizes[1] = rand(50, 200);
	sizes[2] = rand(50, 200);

	const section_4 = document.querySelector('section#go4');
	section_4.style.display = 'flex';

	sizes.sort(function (a, b) { return a - b });

	let element = document.getElementById('go4');
	element = element.getElementsByTagName('div');

	element[0].style.backgroundColor = "white";
	element[0].style.width = "" + sizes[0] + "px";
	element[0].style.height = "" + sizes[0] + "px";
	element[0].style.border = "2px solid black";
	element[0].style.borderRadius = "50%";
	element[0].style.marginLeft = "30px";
	element[0].style.marginBottom = "10px";
	element[0].style.backgroundColor = "green";


	element[1].style.backgroundColor = "white";
	element[1].style.width = "" + sizes[1] + "px";
	element[1].style.height = "" + sizes[1] + "px";
	element[1].style.border = "2px solid black";
	element[1].style.borderRadius = "50%";
	element[1].style.marginLeft = "30px";
	element[1].style.marginBottom = "10px";
	element[1].style.backgroundColor = "red";


	element[2].style.backgroundColor = "white";
	element[2].style.width = "" + sizes[2] + "px";
	element[2].style.height = "" + sizes[2] + "px";
	element[2].style.border = "2px solid black";
	element[2].style.borderRadius = "50%";
	element[2].style.marginLeft = "30px";
	element[2].style.marginBottom = "10px";
	element[2].style.backgroundColor = "blue";
}

code4();

//5

//Deklaruojam kintamaji kuris pasiima visus span elementus is #go5;
const skaicius1 = document.querySelectorAll("#go5 span");
//Deklaruojam funkcija kuri turi parametra element;
function code5(element) {

	const sizes = [];
	sizes[0] = rand(-10, 10);
	sizes[1] = rand(-10, 10);
	sizes[2] = rand(-10, 10);

	element[0].style.fontSize = "20px";
	element[0].style.fontWeight = "bold";
	element[0].style.padding = "20px 0";
	element[0].style.color = getColorCode5(sizes[0]);

	element[1].style.fontSize = "20px";
	element[1].style.fontWeight = "bold";
	element[1].style.padding = "20px 0";
	element[1].style.color = getColorCode5(sizes[1]);

	element[2].style.fontSize = "20px";
	element[2].style.fontWeight = "bold";
	element[2].style.padding = "20px 0";
	element[2].style.color = getColorCode5(sizes[2]);


	element[0].innerHTML = sizes[0];
	element[1].innerHTML = sizes[1];
	element[2].innerHTML = sizes[2];

	function getColorCode5(col) {
		let elmColor = "green";
		if (col > 0) {
			elmColor = "blue";
		} else if (col < 0) {
			elmColor = "red";
		} else {
			elmColor = "green";
		}

		return elmColor;
	}
}
//Issaukiam funkcija vietoj element rasom skaicius1 nes ji mes norime madifikuoti
code5(skaicius1)

//6

let kaina1;
let nuolaida;
const nupirktuZvakiuSkaicius = rand(5, 3000);

console.log(nupirktuZvakiuSkaicius);

if (nupirktuZvakiuSkaicius >= 1000 && nupirktuZvakiuSkaicius < 2000) {
	kaina1 = nupirktuZvakiuSkaicius * 0.97
	nuolaida = 3
}

else if (nupirktuZvakiuSkaicius >= 2000) {
	kaina1 = nupirktuZvakiuSkaicius * 0.96
	nuolaida = 4
}

else {
	kaina1 = nupirktuZvakiuSkaicius
	nuolaida = 0
}

console.log(kaina1);

const span6_1 = document.querySelector("#go6 > p:nth-child(2) > span");
span6_1.innerText = nupirktuZvakiuSkaicius;

const span6_2 = document.querySelector("#go6 > p:nth-child(3) > span");
span6_2.innerText = nupirktuZvakiuSkaicius;

const span6_3 = document.querySelector("#go6 > p:nth-child(4) > span");
span6_3.innerText = nuolaida;

const span6_4 = document.querySelector("#go6 > p:nth-child(5) > span");
span6_4.innerText = kaina1;

//7

const div = document.querySelector('section#go7 div')

const figura = rand(1, 3);

if (figura === 1) {
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.borderRadius = '50%';
	div.style.backgroundColor = 'black';
}

else if (figura === 2) {
	div.style.width = '0px';
	div.style.height = '0px';
	div.style.borderLeft = '50px solid transparent';
	div.style.borderRight = '50px solid transparent';
	div.style.borderBottom = '50px solid red';
}

else {
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.backgroundColor = 'blue';
}

console.log(figura);

//8

const uzduotis8span1 = document.querySelector('section#go8 [data-green] span');
const uzduotis8span2 = document.querySelector('section#go8 [data-red] span');
const uzduotis8span3 = document.querySelector('section#go8 [data-blue] span');
const uzduotis8div1 = document.querySelector('#go8 div:nth-of-type(1)');
const uzduotis8div2 = document.querySelector('#go8 div:nth-of-type(2)');
const uzduotis8div3 = document.querySelector('#go8 div:nth-of-type(3)');
const uzduotis8div4 = document.querySelector('#go8 div:nth-of-type(4)');
const uzduotis8div5 = document.querySelector('#go8 div:nth-of-type(5)');
const uzduotis8div6 = document.querySelector('#go8 div:nth-of-type(6)');

let raudonas = 0;
let zalias = 0;
let melynas = 0;

if (uzduotis8div1.style.backgroundColor == 'red') {
	raudonas++;
}
else if (uzduotis8div1.style.backgroundColor == 'blue') {
	melynas++;
}
else { zalias++; }


if (uzduotis8div2.style.backgroundColor == 'red') {
	raudonas++;
}
else if (uzduotis8div2.style.backgroundColor == 'blue') {
	melynas++;
}
else { zalias++; }


if (uzduotis8div3.style.backgroundColor == 'red') {
	raudonas++;
}
else if (uzduotis8div3.style.backgroundColor == 'blue') {
	melynas++;
}
else { zalias++; }


if (uzduotis8div4.style.backgroundColor == 'red') {
	raudonas++;
}
else if (uzduotis8div4.style.backgroundColor == 'blue') {
	melynas++;
}
else { zalias++; }


if (uzduotis8div5.style.backgroundColor == 'red') {
	raudonas++;
}
else if (uzduotis8div5.style.backgroundColor == 'blue') {
	melynas++;
}
else { zalias++; }


if (uzduotis8div6.style.backgroundColor == 'red') {
	raudonas++;
}
else if (uzduotis8div6.style.backgroundColor == 'blue') {
	melynas++;
}
else { zalias++; }

uzduotis8span1.innerText = zalias;
uzduotis8span2.innerText = melynas;
uzduotis8span3.innerText = raudonas;

//9

// const uzduotis9pirmaeilutespan1 = document.querySelector('#go9 [data-row-1] span:nth-of-type(1)');
// const uzduotis9pirmaeilutespan2 = document.querySelector('#go9 [data-row-1] span:nth-of-type(2)');
// const uzduotis9pirmaeilutespan3 = document.querySelector('#go9 [data-row-1] span:nth-of-type(3)');

// const uzduotis9antraeilutespan1 = document.querySelector('#go9 [data-row-2] span:nth-of-type(1)');
// const uzduotis9antraeilutespan2 = document.querySelector('#go9 [data-row-2] span:nth-of-type(2)');
// const uzduotis9antraeilutespan3 = document.querySelector('#go9 [data-row-2] span:nth-of-type(3)');

// const uzduotis9treciaeilutespan1 = document.querySelector('#go9 [data-row-3] span:nth-of-type(1)');
// const uzduotis9treciaeilutespan2 = document.querySelector('#go9 [data-row-3] span:nth-of-type(2)');
// const uzduotis9treciaeilutespan3 = document.querySelector('#go9 [data-row-3] span:nth-of-type(3)');

// const uzduotis9ketvirtaeilutespan1 = document.querySelector('#go9 [data-row-3] span:nth-of-type(1)');
// const uzduotis9ketvirtaeilutespan2 = document.querySelector('#go9 [data-row-3] span:nth-of-type(2)');
// const uzduotis9ketvirtaeilutespan3 = document.querySelector('#go9 [data-row-3] span:nth-of-type(3)');


//9
// kiekviena diva issiimu i lista:

const rows9 = document.querySelectorAll('#go9 div');

for (let i = 0; i < rows9.length; i++) {
	// paimu konkrecia eilute:
	const row = rows9[i];
	//paimu spana:
	const span = row.querySelectorAll('span');
	// pirmas spanas:
	const num1 = span[0].innerText;
	//antras spanas:
	const num2 = span[1].innerText;

	const result = num1 * num2;
	//trecias spanas:
	span[2].innerText = result;


}

//10

const uzduotis10div1 = document.querySelector("#go10 > div:nth-child(1)");
const uzduotis10div2 = document.querySelector("#go10 > div:nth-child(2)");
const uzduotis10div3 = document.querySelector("#go10 > div:nth-child(3)");
const uzduotis10div4 = document.querySelector("#go10 > div:nth-child(4)");
const uzduotis10div5 = document.querySelector("#go10 > div:nth-child(5)");


const width1 = uzduotis10div1.style.width;
const height1 = uzduotis10div1.style.height;
console.log(width1, height1);
const plotas1 = parseInt(width1) * parseInt(height1);
console.log(plotas1);


const width2 = uzduotis10div2.style.width;
const height2 = uzduotis10div2.style.height;
console.log(width2, height2);
const plotas2 = parseInt(width2) * parseInt(height2);
console.log(plotas2);



const width3 = uzduotis10div3.style.width;
const height3 = uzduotis10div3.style.height;
console.log(width3, height3);
const plotas3 = parseInt(width3) * parseInt(height3);
console.log(plotas3);


const width4 = uzduotis10div2.style.width;
const height4 = uzduotis10div2.style.height;
console.log(width4, height4);
const plotas4 = parseInt(width4) * parseInt(height4);
console.log(plotas4);


const width5 = uzduotis10div2.style.width;
const height5 = uzduotis10div2.style.height;
console.log(width5, height5);
const plotas5 = parseInt(width5) * parseInt(height5);
console.log(plotas5);



if (plotas1 > 10000) {
	uzduotis10div1.style.backgroundColor = 'red';
}
else if (plotas1 < 10000) {
	uzduotis10div1.style.backgroundColor = 'none';

}


if (plotas2 > 10000) {
	uzduotis10div2.style.backgroundColor = 'red';
}
else if (plotas2 < 10000) {
	uzduotis10div2.style.backgroundColor = 'none';
}


if (plotas3 > 10000) {
	uzduotis10div3.style.backgroundColor = 'red';
}
else if (plotas3 < 10000) {
	uzduotis10div3.style.backgroundColor = 'none';
}


if (plotas4 > 10000) {
	uzduotis10div4.style.backgroundColor = 'red';
}
else if (plotas4 < 10000) {
	uzduotis10div4.style.backgroundColor = 'none';
}


if (plotas5 > 10000) {
	uzduotis10div5.style.backgroundColor = 'red';
}
else if (plotas5 < 10000) {
	uzduotis10div5.style.backgroundColor = 'none';
}
