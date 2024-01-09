function solution(strings, n) {
    //인덱스값 구하기
    const idx=strings.map(v=>v[n]).sort();
    
    
    return strings.sort((a,b)=>{
        let indexA=idx.indexOf(a[n]);
        let indexB=idx.indexOf(b[n]);
        
        if(indexA===indexB){
            return a.localeCompare(b);
        }
        else{
            return indexA-indexB
        }
    })

}