//01 Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const container = document.getElementById("container");
    
    // Append 14 h1 tags with the number 4
    for (let i = 0; i < 14; i++) {
      const h1 = document.createElement("h1");
      h1.textContent = "4";
      container.appendChild(h1);
    }

    // Append 14 h4 tags with the number 1
    for (let i = 0; i < 14; i++) {
      const h4 = document.createElement("h4");
      h4.textContent = "1";
      container.appendChild(h4);
    }

    //02 Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.



    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

        const digitsBlock = document.getElementById("digitsBlock");
let Html = '';

    for (let i = 0; i < 44; i++) {
      const num = rand(14, 44);
      //stringas

      let div;
      
      
      // Patikriname, ar skaičius dalijasi iš 4 be liekanos
      if (num % 4 === 0) {
        div = `<div style="color: red">${num}</div>`;
      } else {
      div = `<div style="color: blue">${num}</div>`
      }

Html+=div;

      
    }

    digitsBlock.innerHTML = Html;