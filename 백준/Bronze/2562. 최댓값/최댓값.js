let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let maxArr=Math.max(...input);
console.log(maxArr);
console.log(input.indexOf(maxArr)+1);