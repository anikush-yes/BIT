let step = '';
let winner = '';
let counter = 0;

const winComb = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const cell = document.querySelectorAll('.cell');
const whoGo = document.getElementById('whoGo');
const whoWin = document.getElementById('whoWin');
const board = document.getElementById('board');
const newGameBtn = document.getElementById('new');
const info = document.getElementById('info');
const winBlock = document.getElementById('winBlock');

const who = () => {
    if (step == 'cross') {
        step = 'circle';
        whoGo.innerText = 'Nuliukai';
    }
    else {
        step = 'cross';
        whoGo.innerText = 'Kryžiukai';
    }
    counter++;
};

who();

cell.forEach((item) => {

    item.addEventListener('click', () => {
        if (!item.classList.contains('circle') && !item.classList.contains('cross')) {
            item.classList.add(step);

            if (step == 'cross') {
                item.innerText = 'x';
            }
            if (step == 'circle') {
                item.innerText = '0';
            }

            who();
            crossWin();
            circleWin();
            noWin();
        }
    })
})

const crossWin = () => {
    for (let i = 0; i < winComb.length; i++) {
        if (
            cell[winComb[i][0]].classList.contains('cross') &&
            cell[winComb[i][1]].classList.contains('cross') &&
            cell[winComb[i][2]].classList.contains('cross')
        ) {
            cell[winComb[i][0]].classList.add('winColor')
            cell[winComb[i][1]].classList.add('winColor')
            cell[winComb[i][2]].classList.add('winColor')

            winner = 'Kryžiukai';
            endGame(winner);
            return true;
        }
       
    }
    return false;
}

const circleWin = () => {
    for (let i = 0; i < winComb.length; i++) {
        if (
            cell[winComb[i][0]].classList.contains('circle') &&
            cell[winComb[i][1]].classList.contains('circle') &&
            cell[winComb[i][2]].classList.contains('circle')
        ) {
            cell[winComb[i][0]].classList.add('winColor')
            cell[winComb[i][1]].classList.add('winColor')
            cell[winComb[i][2]].classList.add('winColor')

            winner = 'Nuliukai';
            endGame(winner);
            return true;
        }
        
    }
    return false;
}

const noWin = () => {
    if (!crossWin() && !circleWin() && counter > 9){
winner = 'lygiosios';
endGame(winner);
    }

}

const endGame = (winner) => {

    board.style.pointerEvents = 'none';
    info.style.display = 'none';
    winBlock.style.display = 'block';
    whoWin.innerText = winner;

}

newGameBtn.addEventListener('click', () => {
    document.location.reload();
})