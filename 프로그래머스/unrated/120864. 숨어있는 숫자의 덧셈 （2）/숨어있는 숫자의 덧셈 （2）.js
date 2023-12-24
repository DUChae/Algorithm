function solution(my_string) {
    let result=0;
    let found=my_string.match(/\d+/g);
    //문자열에 자연수가 없는 경우 0 리턴
    found=found?found.map(Number):0;
    
    
    console.log(found);
    for(let i=0;i<found.length;i++){
        result+=found[i];
    }  
    
    return result;
}