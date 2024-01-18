function solution(citations) {
    let count=0;
    const arr=citations.sort((a,b)=>b-a);
    for(let i=0;i<arr.length;i++){
        if(i<arr[i]){count++}
    }
    return count;
}