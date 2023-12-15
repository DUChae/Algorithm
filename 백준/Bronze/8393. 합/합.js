const input = require('fs').readFileSync('/dev/stdin').toString().trim(); 

const n=parseInt(input);
let count=0;
for(let i =0;i<=n;i++){
    count+=i;
}
console.log(count);