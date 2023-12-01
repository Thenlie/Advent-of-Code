const fs = require('fs');
const data = fs.readFileSync('short-input.txt', 'utf8');

// Create main reference array and mixed array to be altered
const data_array = data.split('\n');
data_array.pop();
const mixed_array = [...data_array];
const ARRAY_LEN = data_array.length;

console.log(mixed_array);
// Loop through reference array, update mixed array
for (let i = 0; i < data_array.length; i++) {
    const val = parseInt(data_array[i]);
    let newVal = (i + val) % ARRAY_LEN;
    // check if new value should wrap around array 
    if (newVal < 0) {
        newVal = ARRAY_LEN + newVal;
    } else if (newVal >= ARRAY_LEN) {
        newVal = newVal - ARRAY_LEN;
    }
    mixed_array[newVal] = data_array[i];
}

console.log(mixed_array);
// console.log(parseInt(data_array[1000]) + parseInt(data_array[2000]) + parseInt(data_array[3000]));
