function solution(q, r, code) {
    var answer = '';
    const arr=code.split('').map((v,idx)=>{
        if(idx%q===r){answer+=v}
    });
    return answer;
}