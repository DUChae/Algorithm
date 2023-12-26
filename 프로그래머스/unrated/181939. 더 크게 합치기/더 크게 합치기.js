function solution(a, b) {
    let strA=a.toString();
    let strB=b.toString();
    
    let plus=Number(strA+strB);
    let reversePlus=Number(strB+strA);
   return plus>reversePlus? plus: reversePlus;
    
    
    
}