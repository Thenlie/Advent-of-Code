// read file
const fs = require('fs');
const data = fs.readFileSync('short-input.txt', 'utf8');
// split file by lines
const data_array = data.split('\n');
// split lines by chars
const topo = data_array.map(data => data.split(''));

const ansArr = [];
let pathStack = [];

// find starting point
let startingPoint;
for (let i = 0; i < topo.length; i++) {
    for (let j = 0; j < topo.length; j++) {
        if (topo[i][j] === 'S') {
           startingPoint = { i: i, j: j };
           topo[i][j] = 'a';
        }
    }
}

console.log(startingPoint)

// define recursive function
const makeMove = (cursor, stack, topo) => {
    // push to stack, mark current cell as visited
    console.log(cursor);
    stack.push(topo[cursor.i][cursor.j]);
  
    // check for end point
    if (topo[cursor.i][cursor.j] === 'E') {
        ansArr.push(stack.length);
        return;
    }
  
    // create check for valid moves
    const moves = checkBorders(cursor, topo);
    topo[cursor.i][cursor.j] = 0

    // recurse
    moves.forEach(move => {
        switch (move) {
            case 'U':
                makeMove({ i: cursor.i - 1, j: cursor.j }, stack, topo);
            case 'D':
                makeMove({ i: cursor.i + 1, j: cursor.j }, stack, topo);
            case 'L':
                makeMove({ i: cursor.i, j: cursor.j - 1 }, stack, topo);
            case 'R':
                makeMove({ i: cursor.i, j: cursor.j + 1 }, stack, topo);
            default:
                return;
        }
    })
    return;
}

const checkBorders = (cursor, topo) => {    
    const moves = [];
    // up
    if (cursor.i !== 0 && topo[cursor.i - 1][cursor.j] !== 0 && topo[cursor.i - 1][cursor.j].charCodeAt() - 1 <= topo[cursor.i][cursor.j].charCodeAt()) {
        moves.push('U');
    }
    // down
    if (cursor.i !== topo.length - 1 && topo[cursor.i + 1][cursor.j] !== 0 && topo[cursor.i + 1][cursor.j].charCodeAt() - 1 <= topo[cursor.i][cursor.j].charCodeAt()) {
        moves.push('D');
    }
    // left
    if (cursor.j !== 0 && topo[cursor.i][cursor.j - 1] !== 0 && topo[cursor.i][cursor.j - 1].charCodeAt() - 1 <= topo[cursor.i][cursor.j].charCodeAt()) {
        moves.push('L')
    }
    // right
    if(cursor.j !== topo[0].length - 1 && topo[cursor.i][cursor.j + 1] !== 0 && topo[cursor.i][cursor.j + 1].charCodeAt() - 1 <= topo[cursor.i][cursor.j].charCodeAt()) {
        moves.push('R');
    }
    console.log(moves);
    return moves;
}

makeMove(startingPoint, pathStack, topo);

// print answer
console.log(ansArr);
console.log(Math.min(ansArr));
