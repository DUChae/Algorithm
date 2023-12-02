// function solution(s) {
//     let str=s.split(" ");
//     let regExp=/^[A-Za-z]/;
//     for(let i =0 ; i<str.length;i++){
//         if(regExp.test(str[i][0])){//첫글자가 문자인 경우
//             //소문자일 때 -> 대문자
//             if(str[i][0]===str[i][0].toLowerCase()){
//                 str[i]=str[i][0].toUpperCase() + str[i].substring(1);
//             }
//             //대문자일 때 -> 그대로
//             //첫글자 제외 나머지 중 대문자가 하나라도 있다면
            
//         }
//         //첫글자가 숫자인 경우 -> 그대로
//         str[i]=str[i][0]+str[i].substring(1).toLowerCase();
//     }
//     //join해야함
//     return str.join(" ");
// }
//너무 어렵게 했나.... 런타임 에러가 뜬다...다시 해보자...

function solution(s){
    let str=s.split(" ");
    for(let i =0  ; i<str.length; i++){
        if(str[i]){
            str[i]=str[i][0].toUpperCase() + str[i].substring(1).toLowerCase();
        }
        
    }
    return str.join(" ");
}