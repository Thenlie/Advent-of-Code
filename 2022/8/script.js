const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const data_array = data.split('\n');
const map = [];
data_array.forEach(line => map.push(line.split('')));
let total = 0;

// loop over all trees
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
        // check up down left right
        // if ever visible, add 1 to total
        const val = map[i][j];
        // up
        let up = 0;
        for (let a = i-1; a >= 0; a--) {
            up++;
            if (map[a][j] >= val) {
                break;
            }
        }
        // down
        let down = 0;
        for (let b = i+1; b < map.length; b++) {
            down++;
            if (map[b][j] >= val) {
                break;
            }
        }
        // left
        let left = 0;
        for (let c = j-1; c >= 0; c--) {
            left++;
            if (map[i][c] >= val) {
                break;
            }
        }
        // right
        let right = 0;
        for (let d = j+1; d < map[j].length; d++) {
            right++;
            if (map[i][d] >= val) {
                break;
            }
        }
        if (total < (up * down * right * left)) total = (up * down * right * left);
    }
}

console.log(total);