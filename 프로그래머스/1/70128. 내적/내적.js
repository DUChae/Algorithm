function solution(a, b) {
    return a.reduce((acc,cur,idx)=>{
        const sum=cur*b[idx];
        return acc+sum;
    },0)

}