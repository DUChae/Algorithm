function solution(start, end_num) {
    var answer = [];
    for(let i=end_num;i<=start;i++){
        answer.push(i);
    }
    answer.sort((a,b)=>b-a);
    return answer;
}