function solution(s) {
    const result=[];
    const arr=s.split(' ').sort((a,b)=>a-b).map(v=>Number(v))
    result.push(Math.min(...arr));
    result.push(' ')
    result.push(Math.max(...arr));
    
          //Math.max(...arr) Math.min(...arr);
    return result.join('').toString();
}