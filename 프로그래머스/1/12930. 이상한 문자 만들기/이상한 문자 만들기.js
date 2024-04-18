function solution(s) {
    const answer=[];
    let str=s.toLowerCase().split(' ');
    for(let i=0;i<str.length;i++){
        for(let k=0;k<str[i].length;k++){
            if(k%2===0){
                answer.push(str[i][k].toUpperCase());
            }
            else{answer.push(str[i][k])}
            
        }
        if(i<str.length-1)
        {answer.push(' ');}
    }
    const result=answer.join('');
    
    
    
    
    return result;
}