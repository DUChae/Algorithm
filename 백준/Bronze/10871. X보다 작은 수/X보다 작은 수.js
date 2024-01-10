let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num=input[0].split(' ').map(v=>Number(v));
let arr=input[1].split(' ').map(v=>Number(v));

const result=arr.filter(item=>item<num[1]);
console.log(result.join(' '));