function solution(num_list, n) {
    var answer = [];
    answer=num_list.slice(n);
   console.log(answer)
    for(let i=0;i<n;i++){
        answer.push(num_list[i])
    }
    
    return answer;
}