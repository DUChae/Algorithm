function solution(numbers) {
    var answer = 0;
    let sorted=numbers.sort((a,b)=>b-a);
    answer=sorted[0]*sorted[1];
    return answer;
}