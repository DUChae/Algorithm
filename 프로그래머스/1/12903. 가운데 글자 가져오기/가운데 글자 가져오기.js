function solution(s) {
    var answer = '';
    if(s.length%2==1){
        //홀수, 가운데값
        answer=s[Math.floor(s.length/2)];
        console.log(answer);
    }
    else{answer=s[s.length/2-1]+s[s.length/2];
        //짝수 , 가운데 두글자
        
    }
    return answer;
}