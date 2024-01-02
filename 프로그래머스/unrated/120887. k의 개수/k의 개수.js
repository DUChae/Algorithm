function solution(i, j, k) {
    let count=0;
    for(let x=i;x<=j;x++){
        const numstr=x.toString();
        const ex=numstr.split('').filter(digit=>parseInt(digit)===k).length;
         count=count+ex;
    }
return count;    
}