function solution(x) {
    const sum=x.toString().split('').map(v=>Number(v)).reduce((a,c)=>a+c);
    return x%sum===0?true:false;   
}