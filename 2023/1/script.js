const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const arr = data.split('\n');

const WORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

let total = 0;

const containsNumber = (word) => {
  for (let k = 0; k < WORDS.length; k++) {
    if (word && word.includes(WORDS[k])) {
      return k + 1;
    }
  }
  return null;
}

for (let i = 0; i < arr.length; i++) {
  let val = 0;
  let first = '';
  let second = '';
  for (let j = 0; j < arr[i].length; j++) {
    if (!isNaN(arr[i][j])) {
      val += arr[i][j];
      break
    } else {
      first = first + arr[i][j];
      const num = containsNumber(first)
      if (num) {
        val += num.toString();
        break;
      }
    }
  }
  for (let j = arr[i].length - 1; j >= 0; j--) {
    if (!isNaN(arr[i][j])) {
      val += arr[i][j];
      break
    } else {
      second = arr[i][j] + second;
      const num = containsNumber(second)
      if (num) {
        val += num.toString();
        break;
      }
    }
  }
  total += parseInt(val)
}

console.log('The answer is: ' + total);
