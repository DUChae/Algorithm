function solution(s) {
    let answer=[];
    let ex=s.split(" ");
    ex.sort((a,b)=>a-b);
    let last=ex[ex.length-1];
    
    answer[0]=ex[0];
    answer[1]=last;
    let test= answer.join(" ");
    
return test;}