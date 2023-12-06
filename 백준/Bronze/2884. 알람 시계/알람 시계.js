let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const H=parseInt(input[0]);
const M=parseInt(input[1]);

if(M<45){
    if(H===0){
        console.log(H+23,60-45+M);
    }
    else {
        console.log(H-1,60-45+M);
    }
}else{
    console.log(H,M-45);
}
 