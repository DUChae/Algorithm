function solution(numbers) {
    var answer = 0;
    let count=0;
    for(let i =0;i<numbers.length;i++){
        count+=numbers[i];
        answer=count/numbers.length;
    }
    return answer;
}