function solution(arr) {
    var answer = [];
    const minValue=Math.min.apply(null,arr);
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]===minValue){
            arr.splice(i,1);
            if(arr.length===0) {return [-1];}
        }  
    }
  
    return arr;
}