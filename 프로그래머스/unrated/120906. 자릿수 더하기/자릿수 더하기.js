function solution(n) {
    var answer = 0;
    var m=n.toString();
    for(let i =0;i<m.length;i++){
        answer+=parseInt(m[i]);
    }
    return answer;
}