function solution(my_string) {
    var answer = 0;
    const numbers=my_string.replaceAll(/[^0-9]/g,"");
    for(let i=0;i<numbers.length;i++){
        answer+=parseInt(numbers.charAt(i));
    }
    return answer;
}