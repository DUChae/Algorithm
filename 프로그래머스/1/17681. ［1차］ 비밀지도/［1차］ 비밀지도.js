function solution(n, arr1, arr2) {
    const result=[];
    for(let i=0;i<arr1.length;i++){
        const test1=arr1[i].toString(2).padStart(n,'0').split('');
        const test2=arr2[i].toString(2).padStart(n,'0').split('');
        const newArr=test1.map((v,idx)=>{
            return v==='1'||test2[idx]==='1'?'#':' ';
        })
        result.push(newArr.join(''));
      
    }
  return result;
}