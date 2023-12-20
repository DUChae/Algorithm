function solution(money) {
    var answer = [];
    let count=Math.floor(money/5500);
    let changes=money-5500*count;
    answer=[count,changes];
    return answer;
}