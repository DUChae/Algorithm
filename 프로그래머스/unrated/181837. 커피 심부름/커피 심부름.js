function solution(order) {
    var answer = 0;
    for(let i=0;i<order.length;i++){
        
        order[i].includes('americano')?answer+=4500:answer+=0;
        order[i].includes('latte')?answer+=5000:answer+=0;
        order[i].includes('anything')?answer+=4500:answer+=0;
    }
    
    return answer;
}