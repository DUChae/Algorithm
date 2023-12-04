const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const A=parseInt(input[0]);
const B=parseInt(input[1]);

const result1=A*(B%10);
const result2=A*(Math.floor((B%100)/10));
const result3=A*(Math.floor(B/100));
const result4=A*B;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);