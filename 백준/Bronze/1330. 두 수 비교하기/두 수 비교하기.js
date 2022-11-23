var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const a = input[0];
const b = input[1];

if(a > b) console.log(">");
if(a < b) console.log("<");
if(a === b) console.log("==");
