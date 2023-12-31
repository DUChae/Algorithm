function solution(number) {
    
    const num=number.split('').reduce((acc,cur)=>Number(acc)+Number(cur));
    return num%9;
    
}