function solution(left, right) {
    var answer = 0;
    for(let i=left;i<=right;i++){
        let x=0;
        for(let j=1;j<=i;j++){
            if(i%j==0){
                x+=1;
                
            }
        }
        if(x%2==0){
            answer+=i;
        }else{answer+=i*(-1);}
    }
    return answer;
}