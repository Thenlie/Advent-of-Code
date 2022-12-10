const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const data_array = data.split('\n');

const screen = [...Array(6)].map(x => Array(40).fill('.'));

const answer = [];
const target = [20, 60, 100, 140, 180, 220];
let regx = 1;
let cycle = 1;

let posY = 0;
let posX = 0;

function checkTarget() {
    console.log(cycle, regx, posX, posY)
    if (regx === cycle - 1 - (posY * 40) || regx + 1 === cycle - 1 - (posY * 40) || regx - 1 === cycle - 1 - (posY * 40)) {
        screen[posY][posX] = '#';
    }
    // check for signal PART 1
    if (target.includes(cycle)) {
        answer.push(cycle * regx);
    }
    // track CRT drawing position PART 2
    if (cycle % 40 == 0) {
        posY++;
        posX = 0;
    } else {
        posX++;
    }
}

for (let i = 0; i < data_array.length; i++) {
    checkTarget();
    
    let arr = data_array[i].split(' ') 
    if (arr[0] === 'noop') {
        cycle++;
    } else {
        cycle++;
        checkTarget();
        cycle++;
        regx += parseInt(arr[1]);
    }
}

let sum = 0;
answer.forEach(x => sum += x);

console.table(screen);