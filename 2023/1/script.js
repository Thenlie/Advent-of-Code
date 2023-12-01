const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const arr = data.split('\n');


let total = 0;

for (let i = 0; i < arr.length; i++) {
  let val = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (!isNaN(arr[i][j])) {
      console.log('first')
      val += arr[i][j];
      break
    }
  }
  for (let j = arr[i].length; j >= 0; j--) {
    if (!isNaN(arr[i][j])) {
      console.log('second')
      val += arr[i][j];
      break
    }
  }
  console.log(parseInt(val))
  total += parseInt(val)
}

console.log('The answer is: ' + total);