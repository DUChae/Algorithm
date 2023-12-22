function solution(age) {
    var answer = '';
    age=age.toString();
    console.log(age);
    
    const alpha=['a','b','c','d','e','f','g','h','i','j'];
    for(let i=0;i<age.length;i++){
        answer+=alpha[age[i]];
    }
     
    

    return answer;
}