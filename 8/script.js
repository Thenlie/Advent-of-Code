const fs = require('fs');
const data = fs.readFileSync('short-input.txt', 'utf8');
const data_array = data.split('\n');
const map = [];
data_array.forEach(line => map.push(line.split('')));
total = 0;

// loop over all trees
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
        // check up down left right
        // if ever visible, add 1 to total
        const val = map[i][j];
        let isVisible = true;
        if (i === 0 || j == 0 || i === map.length-1 || j === map[0].length-1) {
            console.log('win', map[i][j]);
            total++;
            continue; 
        }
        // up
        for (let a = 0; a < i; a++) {
            if (map[a][j] >= val) {
                console.log('lose1', map[i][j])
                isVisible = false;
                break;
            }
        }
        if (isVisible) {
            total++;
            continue;
        }
        isVisible = true;
        // down
        for (let b = i+1; b < map.length; b++) {
            if (map[b][j] >= val) {
                console.log('lose2', map[i][j])
                isVisible = false;
                break;
            }
        }
        if (isVisible) {
            total++;
            continue;
        }
        isVisible = true;
        // left
        for (let c = 0; c < j; c++) {
            if (map[i][c] >= val) {
                console.log('lose3', map[i][j])
                isVisible = false;
                break;
            }
        }
        if (isVisible) {
            total++;
            continue;
        }
        isVisible = true;
        // right
        for (let d = j+1; d < map[j].length; d++) {
            if (map[i][d] >= val) {
                console.log('lose4', map[i][j])
                isVisible = false;
                break;
            }
        }
        if (isVisible) total++;
        isVisible = true;
    }
}

console.log(total);