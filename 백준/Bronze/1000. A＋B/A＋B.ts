const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A : number = parseInt(inputData[0]);
const B : number = parseInt(inputData[1]);

console.log(A+B);