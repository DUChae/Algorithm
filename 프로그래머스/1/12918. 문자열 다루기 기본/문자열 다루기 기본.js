// function solution(s) {
//     var regex = /^[0-9]+$/;
//     if(s.length==4 || s.length==6){
//         for(let i = 0 ; i<s.length;i++){
//             if(!regex.test(s[i])){
//                 //test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환합니다.
//                 // s[i]가 숫자가 아닌 경우의 처리

//                 return false;
//             }
//             else{
//                 return true;
//             }
//         }
//     }
// }
function solution(s){
         var regex = /^[0-9]+$/;

    return (s.length==4 ||s.length==6)&&regex.test(s);
}