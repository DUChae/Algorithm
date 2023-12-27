function solution(num_list) {
    var result1=0;
    var result2=0;
    for(let i=0;i<num_list.length;i++){
        if(i%2!==0){result1+=num_list[i]}
        else{result2+=num_list[i];}
    }
    console.log(result1,result2)
    if(result1>result2){return result1;}
    else if(result1<result2){return result2;}
    else{return result1;}
    
}