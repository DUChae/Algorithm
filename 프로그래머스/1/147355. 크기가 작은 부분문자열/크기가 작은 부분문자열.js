function solution(t, p) {
    let result=[];
    let answer=[];
     let pLength=p.length;
    for(let i =0 ; i<t.length; i++){
        let part = t.substring(i,i+pLength);
        if(part.length===pLength){
        result.push(part);}
    }
    for(let i= 0; i<result.length;i++){
        if(result[i]<=p){
            answer.push(result[i]);
        }
    }
    return answer.length;
}