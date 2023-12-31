function solution(n) {
    var result=[];
    for(let i=4;i<=n;i++){
        for(let k=2;k<i;k++){
            if(i%k===0){
                result.push(i);
            }
        }
    }
    return [...new Set(result)].length;
}