const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const data_array = data.split('\n');

let stack = [];
let total = [];

const command_handler = (words) => {
    if (words[1] === 'cd') {
        if (words[2] === '..') {
            stack.pop();
        } else {
            const string = JSON.stringify(stack) + words[2];
            const index = total.map(x => x.id).indexOf(string);
            if (index === -1) total.push({name: words[2], size: 0, id: string});
            stack.push({name: words[2], size: 0, id: string});
        }
    }
}

const file_handler = (words) => {
    for (let i = 0; i < stack.length; i++) {
        const index = total.map(x => x.id).indexOf(stack[i].id);
        total[index].size += parseInt(words[0]);
    }
}

data_array.forEach(line => {
    const words = line.split(' ');
    if (words[0] === '$') command_handler(words);
    else if (words[0] !== 'dir') file_handler(words);
});

console.table(total)
const answer = total.filter(x => x.size <= 100000);
console.table(answer)
let sum = 0;
answer.forEach(ans => sum += ans.size)
console.log(sum);
