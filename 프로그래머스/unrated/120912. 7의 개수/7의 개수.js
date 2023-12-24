function solution(array) {
    var answer = 0;
    var str=array.toString();
    let testing=str.match(/7/g);
    if(testing===null){answer=0;}
    else{answer=testing.length;}

    return answer;
}