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

// Random funcija bendrą visam JS
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


let pirmasKintamasis = rand(0, 4);
let antrasisKintamasis = rand(0, 4);

let element = document.getElementById('go3');
element = element.getElementsByTagName('span');

if (pirmasKintamasis >= antrasisKintamasis) {
	res = pirmasKintamasis / antrasisKintamasis;

	element[0].innerHTML = pirmasKintamasis;
	element[1].innerHTML = antrasisKintamasis;
}

else {
	res = antrasisKintamasis / pirmasKintamasis
	element[0].innerHTML = antrasisKintamasis;
	element[1].innerHTML = pirmasKintamasis;
}

element[2].innerHTML = res;



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
sizes.sort(function(a, b){return a - b});

let element = document.getElementById('go4');
element = element.getElementsByTagName("div");
 
element[0].style.backgroundColor = "while";
element[0].style.width = "" + sizes[0] + "px";  
element[0].style.height = "" + sizes[0] + "px";  
element[0].style.border = "2px solid black";
element[0].style.borderRadius = "50%";
element[0].style.marginLeft = "30px";
element[0].style.marginBottom = "10px";		


strPropSize = "'" + sizes[1] + "px'";
element[1].style.backgroundColor = "while";
element[1].style.width = "" + sizes[1] + "px";  
element[1].style.height = "" + sizes[1] + "px";  
element[1].style.border = "2px solid black";
element[1].style.borderRadius = "50%";
element[1].style.marginLeft = "30px";
element[1].style.marginBottom = "10px";		


element[2].style.backgroundColor = "while";
element[2].style.width = "" + sizes[2] + "px"; 
element[2].style.height = "" + sizes[2] + "px";  
element[2].style.border = "2px solid black";
element[2].style.borderRadius = "50%";
element[2].style.marginLeft = "30px";
element[2].style.marginBottom = "10px";

return;		
}

code4();