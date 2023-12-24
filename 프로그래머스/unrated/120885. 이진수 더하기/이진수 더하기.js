function solution(bin1, bin2) {
   
    // var numBin1=Number(bin1);
    // var numBin2=Number(bin2);
    let A=parseInt(bin1,2);
    let B=parseInt(bin2,2);
    let result1=A+B;
    let answer=result1.toString(2);
    return answer;
    console.log(A,B,result1,answer);
 
}