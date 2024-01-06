function solution(n) {
    const countOne=(num)=>num.toString(2).match(/1/g).length;
    const target=countOne(n);
    let nextNum=n+1;
    while(countOne(nextNum)!==target){
        nextNum++;
    }
return nextNum;
    
}