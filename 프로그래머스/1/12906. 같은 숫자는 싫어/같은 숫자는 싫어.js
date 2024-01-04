function solution(arr)
{
    return arr.filter((item,index,array)=>item!==array[index+1]);
    
}