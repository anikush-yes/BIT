//1. Padaryti mygtuką, kurį paspaudus jis pranyksta.

function dingti() {
    document.getElementById("dingtiMygtukas").style.display = "none";
}

//Nekorektiskas variantas:

const btn1 = document.querySelector('#nr1')
.addEventListener('click', e => {
    document.querySelector('#nr1').style.visibility = 'hidden';
    document.querySelector('#nr1').style.transition = '1s';
});

// btn1.addEventListener('click', _ =>btn1.style.display = 'none');

//Korektiskas variantas:

// btn1.addEventListener('click', _ => {
//     console.log('paspaustas');
//     if (btn1.dataset.buttonStatus == 'on') {
//         btn1.style.opacity = 0;
//         btn1.dataset.buttonStatus = 'off';
//     } else {
//         btn1.style.opacity = 1;
//         btn1.dataset.buttonStatus = 'on';
//     }
// });

// ----------------------------------------------------------------------------------------------------

//2. Sekcijoje nr2 sukurti 9 kvadratus. Paspaudus kvadratą jis turi pakeisti savo spalvą.

// function randomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// const sekcija = document.getElementById('nr2');
//     for (let i = 0; i < 9; i++) {
//         const kvadratas = document.createElement('div');
//         kvadratas.classList.add('kvadratas');
        
//         // Pridedame spustelėjimo įvykį kiekvienam kvadratui
//         kvadratas.addEventListener('click', function() {
//             kvadratas.style.backgroundColor = randomColor();
//         });
        
//         sekcija.appendChild(kvadratas);

//Destytojo variantas:

const settings = {
count: 100,
size: 50,
color1: 'skyblue',
color2: 'pink',
event: MouseEvent

}

const sqColors = (targetId, settings) => {

    const target = document.querySelector('#' + targetId);

    const targetWidth = Math.sqrt(settings.count) * settings.size + 'px';
    target.style.width = targetWidth;

    for (let i = 0; i < settings.count; i++) {
        const div = document.createElement('div');
        div.style.width = settings.size + 'px';
        div.style.height = settings.size + 'px';
        div.style.backgroundColor = settings.color1;
        div.dataset.status = '1';
        div.addEventListener(settings.event, _ => {
            if (div.dataset.status == '1') {
                div.style.backgroundColor = settings.color2;
                div.dataset.status = '2';
            } else {
                div.style.backgroundColor = settings.color1;
                div.dataset.status = '1';
            }
        });

 
        target.appendChild(div);
    }

}
sqColors('nr2', settings);
    

