const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' '); 
const A=parseInt(input[0]);
const B=parseInt(input[1]);
const C = parseInt(input[2]);

if(A==B&&B==C){ //3개의 값이 모두 같을 때
    console.log(10000+A*1000);
}
else if(A==B ||B==C||A==C){ //2개의 값만 같을 때
    if(A==B){console.log(1000+A*100);}
    else if(B==C){console.log(1000+B*100);}
    else{console.log(1000+C*100);}
}
else{//3개의 값 모두가 다를 때
    const Max=Math.max(A,B,C);
    console.log(Max*100);;
    
}