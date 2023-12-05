// Target: 12 red, 13 green, and 14 blue
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
// const data = fs.readFileSync('short-input.txt', 'utf8');
const lines = data.split('\n');
// const words = data.split(' ');
// const chars = data.split('');

const arr = [];
let count = 0;

for (let i = 0; i < lines.length; i++) {
  const id = lines[i].match(/Game \d+:/)[0].slice(5).slice(0, -1);
  
  const redCubes = Array.from(lines[i].matchAll(/\d+ (red)/g)).map(e => {
    return parseInt(e[0].slice(0, -4));
  });
  const greenCubes = Array.from(lines[i].matchAll(/\d+ (green)/g)).map(e => {
    return parseInt(e[0].slice(0, -6));
  });
  const blueCubes = Array.from(lines[i].matchAll(/\d+ (blue)/g)).map(e => {
    return parseInt(e[0].slice(0, -5));
  });

  const maxRed = Math.max(...redCubes);
  const maxGreen = Math.max(...greenCubes);
  const maxBlue = Math.max(...blueCubes);

  arr[i] = {
    red: maxRed,
    green: maxGreen,
    blue: maxBlue,
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i].red > 12) continue;
  if (arr[i].green > 13) continue;
  if (arr[i].blue > 14) continue;
  count += i + 1;
}

console.log('Answer:', count)