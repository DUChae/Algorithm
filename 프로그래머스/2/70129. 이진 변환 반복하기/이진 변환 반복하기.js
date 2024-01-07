function solution(s) {
    // const str=s.replaceAll('0','').length.toString(2);
    let zeroCount=0;
    let countTran=0;
   
    while(s!=='1'){
         const countZero=s.split('0').length-1;   //0의 갯수
        s=(s.length-countZero).toString(2);
        zeroCount+=countZero;
        countTran++;
    }
    return [countTran,zeroCount]
}