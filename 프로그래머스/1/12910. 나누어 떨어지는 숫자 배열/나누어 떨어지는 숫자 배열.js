function solution(arr, divisor) {
    var answer = [];
    // function everyFunction(value){
    //     return value%divisor==1
    // }
    // if(arr.every(everyFunction)==true){arr.sort(test);}
    // for ( let i = 0 ; i<arr.length;i++){      
    //     if(arr[i]%divisor===0){
    //         answer.push(arr[i]);
    //     }
    //     else if(arr[i]%divisor==1)
    //     {answer[0]=-1;}
    // }
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]%divisor==0){
            answer.push(arr[i]);
        }
    }
    if(answer.length==0){
        return [-1];
    }
    answer.sort((a,b)=>a-b);
    return answer;
}
