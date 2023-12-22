function factorial(num){
    if(num<0) return -1;
    else if(num==0) return 1;
    else{
    return (num * factorial(num - 1));
}}
function solution(n) {
    for(let i=1;i<=n;i++){
        if(factorial(i)===n){
            return (i);
        }else if(factorial(i)>n){return (i-1);}
    }
}