function solution(arr, n) {
    var answer = [];
    const result=arr.map((element,index)=>{
        if(arr.length%2!==0){
            if(index%2===0){answer.push(element+n);}
            else{answer.push(element);}
        }
        else{
            if(index%2!==0){answer.push(element+n);}
            else{answer.push(element);}
        }
    })
    return answer;
}