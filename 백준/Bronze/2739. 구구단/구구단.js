const input = require('fs').readFileSync('/dev/stdin').toString().trim(); 
const A=parseInt(input);

for(let i =1 ; i<=9;i++){
    console.log(`${A} * ${i} = ${A*i}`);
}