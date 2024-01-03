function solution(arr) {
   const result= arr.filter(item=>item!==Math.min(...arr));
    if(result.length===0){result.push(-1)}
   return result;
 
}