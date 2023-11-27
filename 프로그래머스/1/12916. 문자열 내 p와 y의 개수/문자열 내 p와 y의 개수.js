function solution(s){
    //p 확인
    var regExpP=/p/ig;
    let foundP= (s.match(regExpP) ||[]).length;
    
    
    //y 확인
    var regExpY=/y/ig;
    let foundY= (s.match(regExpY)||[]).length;
    
    return foundP===foundY
    
    
  //found에서 아무것도 찾지 못하여 Null값을 반환할 수 있다는 점을 명시해야한다. 
}