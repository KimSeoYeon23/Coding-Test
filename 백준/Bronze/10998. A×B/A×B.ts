const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A:number = parseInt(input[0]);
const B:number = parseInt(input[1]);
console.log(A * B);