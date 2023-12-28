function solution(strArr) {
    var answer = [];
    strArr.map((v,idx)=>{
        if(idx%2!==0){answer.push(v.toUpperCase());}
        else{answer.push(v.toLowerCase());}
    })
    return answer;
}