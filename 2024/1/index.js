const fs = require('fs');
const data1 = fs.readFileSync('input1.sorted.txt', 'utf8');
const data2 = fs.readFileSync('input2.sorted.txt', 'utf8');
const lines1 = data1.split('\n');
const lines2 = data2.split('\n');

// PART 1
let totalDistance = 0;
for (let i = 0; i < lines1.length; i++) {
    if (lines1[i] > lines2[i]) {
        totalDistance += lines1[i] - lines2[i]
    } else {
        totalDistance += lines2[i] - lines1[i]
    }
}
console.log('Total distance:', totalDistance);

// PART 2
let similarityScore = 0;
for (let i = 0; i < lines1.length; i++) {
    let count = 0;
    for (let j = 0; j < lines2.length; j++) {
        if (lines1[i] === lines2[j]) {
            count++;
        }
    }
    if (count > 0) {
        similarityScore += lines1[i] * count;
    }
}
console.log('Similarity score:', similarityScore);