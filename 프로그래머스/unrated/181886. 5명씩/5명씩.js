function solution(names) {
    var answer = [];
    names.map((v,idx)=>{
        if(idx%5===0){answer.push(v);}
    })
    return answer;
}