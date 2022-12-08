const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const data_array = data.split('\n');

let stack = [];
let total = [];
let lines = 0;
let commands = 0;
let files = 0;
let lists = 0;
let cd = 0;

const command_handler = (words) => {
    commands++;
    if (words[1] === 'cd') {
        cd++;
        if (words[2] === '..') {
            stack.pop();
        } else {
            stack.push({name: words[2], size: 0});
            const index = total.map(x => x.name).indexOf(words[2]);
            if (index === -1) total.push({name: words[2], size: 0, depth: stack.length});
        }
    } else {
        lists++;
    }
}

const file_handler = (words) => {
    files++;
    for (let i = 0; i < stack.length; i++) {
        const index = total.map(x => x.name).indexOf(stack[i].name);
        total[index].size += parseInt(words[0]);
    }
}

data_array.forEach(line => {
    lines++;
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
console.log(`
Lines read: ${lines}
CD used: ${cd}
LS used: ${lists}
Commands: ${commands}
Files: ${files}
`)