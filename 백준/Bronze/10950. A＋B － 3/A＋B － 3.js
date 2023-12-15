const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const Num=parseInt(input[0]);

for(let i=0;i<Num;i++){
    const A=parseInt(input[2*i+1]);
    const B=parseInt(input[2*i+2]);
    console.log(A+B);
}