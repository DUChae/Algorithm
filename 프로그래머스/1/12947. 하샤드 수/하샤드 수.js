function solution(x) {
    let sum= 0;
    const test=x;
    while(x>0){
        sum+=x%10;
        x=Math.floor(x/10);
    
    }
    console.log(sum);
    if(test%sum==0){
        return true;
    }else{return false;}
}