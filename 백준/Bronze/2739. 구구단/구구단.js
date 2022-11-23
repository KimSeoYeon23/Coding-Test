var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

var a = input[0];

for(var i=1; i < 10; i++){
    console.log(`${a} * ${i} = ${a * i}`);
}