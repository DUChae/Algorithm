function solution(s) {
    var answer = [];
    var dup=[];
    const set=new Set();
    s.split('').map((v,index)=>{
        if(!set.has(v)){
            set.add(v);
            answer.push(-1);          
            dup.push(v);
                       }
        else{
            
            let considering=dup.lastIndexOf(v); //기존에 있던 원소의 인덱스
            dup.push(v);
            
            answer.push(index-considering);
        }
    })
    return answer;
}