//재귀방식
//제일 간단하지만 런타임 오류로 인해 다른 방법 찾아야함
// function solution(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return solution(n - 1) + solution(n - 2);
// }

function solution(n){
    let f0=0;
    let f1=1;
    let result=0;
    for(let i=2; i<=n;i++){
        result=(f0+f1)%1234567; //왜 이렇게 하는건지는 문제 오류인듯 함
        f0=f1;
        f1=result;
    }
    //return result%1234567; 하도 안되서 풀이보니 이렇게 하는 줄 알았지만...
    return result;
}