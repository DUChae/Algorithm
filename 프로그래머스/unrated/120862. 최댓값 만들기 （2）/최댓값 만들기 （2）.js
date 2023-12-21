function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>b-a);
    let multi=numbers[numbers.length-1]*numbers[numbers.length-2]
    let expected=numbers[0]*numbers[1];
    console.log(numbers);
    for(let i=0;i<numbers.length;i++){
        if(multi>0&&multi!=0){
            if(multi>expected){answer=multi;}
            else{answer=expected;}
        }
        else{answer=expected;}
    }
    
    return answer;
}