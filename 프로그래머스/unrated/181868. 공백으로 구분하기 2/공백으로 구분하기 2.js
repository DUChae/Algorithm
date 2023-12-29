function solution(my_string) {
    var answer = [];
    var str=my_string.split(' ').map(v=>{
        if(v.length!==0){answer.push(v);}
    });
    return answer;
}