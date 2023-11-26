function solution(phone_number) {
    var etc = '';
   
   let test= phone_number.slice(0,-4);
    let except=phone_number.slice(-4);
    for(let i= 0; i<test.length;i++){
        etc+='*';
    }
    test=etc;
    return test+except;
}