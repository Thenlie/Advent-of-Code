const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const data_array = data.split('\n');

const map = [...Array(1000)].map(e => Array(1000).fill(0));
let head = {1: 500, 2: 500};
let tail = {1: 500, 2: 500};
let total = 0;

for (let i = 0; i < data_array.length; i++) {
    console.log('loop')
    const split = data_array[i].split(' ')
    const direction = split[0];
    const x = split[1];
    for (let j = 0; j < x; j++) {
    console.log('inner loop')
        switch (direction) {
            case 'U':
                head[1]++;     
                break;
            case 'D':
                head[1]--;     
                break;
            case 'L':
                head[2]--;     
                break;
            case 'R':
                head[2]++;     
                break;
        }
    

        console.log(Math.abs(head[1] - tail[1]) > 1)
        console.log(Math.abs(head[2] - tail[2]) > 1)

        if (Math.abs(head[1] - tail[1]) == 2) {
                head[1] > tail[1] ? tail[1]++ : tail[1]--;
            if (Math.abs(head[2] - tail[2]) >= 1) {
                head[2] > tail[2] ? tail[2]++ : tail[2]--;
            }
        }
        if (Math.abs(head[2] - tail[2]) == 2) {
            head[2] > tail[2] ? tail[2]++ : tail[2]--;
            if (Math.abs(head[1] - tail[1]) >= 1) {
                head[1] > tail[1] ? tail[1]++ : tail[1]--;
            }
        }
        if (map[tail[1]][tail[2]] !== '#') {
            console.log(tail[1], tail[2])
            total++;
        }
        map[tail[1]][tail[2]] = '#';
    }
}

// console.table(map);
console.log(total);