function solution(num) {
    var answer = 0;
    let sum=0;
    if(num==1) return 0;
    while(num!=1)
    {if(num%2==0){
        //짝수
     num=num/2;
    }else{
        //홀수
       num= (num*3)+1;
    }
     sum+=1;
     if(sum==500) return -1;
    }
    
    return sum;
}