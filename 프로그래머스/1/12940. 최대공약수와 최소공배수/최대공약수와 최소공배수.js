function solution(n, m) {
    var answer = [];
    let test1=0;
    let test2=0;
    //n,m의 최대공약수
    for(let i =1;i<=Math.min(n,m);i++){
        if(n%i===0&&m%i===0){
           test1=i;
        }
    }
    console.log(test1);
    //n,m의 최소공배수 = n*m/n,m의 최대공약수
    test2= n*m/test1;
    console.log(test2);
   answer[0]=test1;
    answer[1]=test2;
    return answer;
}
/* 

*/