function solution(num, k) {
    var answer = 0;
    num=num.toString();
    k=k.toString();
    
    
    if(num.includes(k)==true){
        for(let i=0;i<num.length;i++){
            if(num.charAt(i)===k){return i+1;}
        }
    }
    else{return -1;}
    return answer;
}