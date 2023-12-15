const input = require('fs').readFileSync('/dev/stdin').toString().trim(); 
const A=parseInt(input);
const B=A/4;
const C='long'
let result='';
for(let i =0;i<B;i++){
    result+=`${C} `;
}
console.log(result+"int");