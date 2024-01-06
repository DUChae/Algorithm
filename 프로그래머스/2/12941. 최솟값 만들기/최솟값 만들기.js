function solution(A,B){
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    return B.reduce((acc,cur,idx)=>{
        return acc+cur*A[idx]
    },0);
   
}