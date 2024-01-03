function solution(a, b) {
    const [start,end]=[a,b].sort((x,y)=>x-y);
    return Array(end-start+1).fill(start)
                                .map((v,idx)=>v+idx).reduce((a,c)=>a+c);
}