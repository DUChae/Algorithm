function solution(n) {
    var answer = [];
    var ex=n;
    while(ex!==1){
        answer.push(ex);
        ex=ex%2===0?ex/2:3*ex+1;
    }
    answer.push(1);
    return answer;
}