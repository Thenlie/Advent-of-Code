const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const data_array = data.split('\n');

console.log(data_array);
