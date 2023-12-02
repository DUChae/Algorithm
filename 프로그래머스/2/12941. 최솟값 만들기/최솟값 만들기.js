//가장 큰 수와 가장 작은 수를 곱해야한다.
function solution(A,B){
   let sum=0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    for(let i = 0; i<A.length;i++){
        sum+=A[i]*B[i];
        
    }
return sum;
}



