function solution(my_string, indices) {
    indices.sort((a,b)=>a-b); 
    let arr=my_string.split('').filter((value,index)=>!indices.includes(index)).join('');
   
    
   return arr;
}