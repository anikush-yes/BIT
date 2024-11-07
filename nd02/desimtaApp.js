// 
// Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun



const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

for (let i = 0; i < 444; i++) {
    const skritulys = document.createElement ('div');
    skritulys.className = 'circle';
    skritulys.style.backgroundColor = randomColor();

    const skritulioDydis = rand (44, 144);
    skritulys.style.width = `${skritulioDydis}px`;
    skritulys.style.height = `${skritulioDydis}px`;

    //pozicija kritulio ekrane ir kad neislistu is ekrano skrituliai:

    const positionX = rand(0, screenWidth - skritulioDydis);
    const positionY = rand(0, screenHeight - skritulioDydis);
    skritulys.style.left = `${positionX}px`;
    skritulys.style.top = `${positionY}px`;

    document.body.appendChild(skritulys);
}


