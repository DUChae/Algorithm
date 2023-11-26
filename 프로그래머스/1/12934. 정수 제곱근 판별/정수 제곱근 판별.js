function solution(n) {
    var answer = 0;
    let x= Math.sqrt(n);
    if(Number.isInteger(x)==true){
        answer=Math.pow(x+1,2);
        console.log(answer);
    }else{answer=-1;}
    return answer;
}