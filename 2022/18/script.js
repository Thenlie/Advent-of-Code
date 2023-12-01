const fs = require('fs');
const data = fs.readFileSync('short-input.txt', 'utf8');

// Create main reference array and mixed array to be altered
const data_array = data.split('\n');
data_array.pop();

let total = 0;

for (let i = 0; i < data_array.length; i++) {
    const main_arr = data_array[i].split(',');
    let sides = 6;
    for (let j = 0; j < data_array.length; j++) {
        const second_arr = data_array[j].split(',');
        // Check for adjacent sides
        if (main_arr[0] == second_arr[0] && main_arr[1] == second_arr[1]) {
            sides--;
            if (sides === 0) break;
        }
        if (main_arr[1] == second_arr[1] && main_arr[2] == second_arr[2]) {
            sides--;
            if (sides === 0) break;
        }
        if (main_arr[2] == second_arr[2] && main_arr[0] == second_arr[0]) {
            sides--;
            if (sides === 0) break;
        }
    }
    total += sides;
}

console.log(total);
