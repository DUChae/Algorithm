function solution(numbers) {
    const arr= numbers.map(v=>v+"")
    .sort((a,b)=>(b+a)-(a+b))
    .join('')
    return arr[0]==='0'?'0':arr;
    
}