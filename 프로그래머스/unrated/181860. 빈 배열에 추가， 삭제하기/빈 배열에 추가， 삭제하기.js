function solution(arr, flag) {
    var answer = [];
    arr.map((v,i)=>{
        if(flag[i]===true){
            for(let k=0;k<v*2;k++){
                answer.push(v)
            }
        }
        else{
            for(let j=0;j<v;j++){
                answer.pop();
            }
        }
    })
    return answer;
}
//true=>arr[i]를 arr[i]*2만큼 추가
//false=>맨 뒤에서 arr[i]개 삭제 