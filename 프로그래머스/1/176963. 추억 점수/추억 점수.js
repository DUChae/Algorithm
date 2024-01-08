function solution(name, yearning, photo) {
    var answer = [];
   for(const pic of photo){
       let totalscore=0;
       for(const person of name){
           if(pic.includes(person)){
               const index=name.indexOf(person)
               totalscore+=yearning[index];
           }
       }
       answer.push(totalscore);
   }
    
    return answer;
}