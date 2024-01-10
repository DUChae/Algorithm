let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const Num=input[0].split('').map(Number);
const arr=input[1].split(' ').map(Number);
arr.sort((a,b)=>a-b);
console.log(`${arr[0]} ${arr[arr.length-1]}`);