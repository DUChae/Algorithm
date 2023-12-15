const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const X = parseInt(input[0]);
const N = parseInt(input[1]);
const items = input.slice(2);
let result=0;
for(let i =0;i<N;i++){
    const price= parseInt(items[2*i]);
    const quantity=parseInt(items[(2*i)+1]);
    result+=price*quantity;
}
X===result?console.log("Yes"):console.log("No")