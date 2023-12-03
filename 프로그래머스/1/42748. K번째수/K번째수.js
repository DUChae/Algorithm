
function solution(array, commands) {
    var answer = [];
//     answer=array.slice(commands[0][0]-1,commands[0][1]);
//     answer.sort((a,b)=>a-b);
//     answer[2];
    
//     answer=array.slice(commands[1][0]-1,commands[1][1]);

    for(let i =0;i<commands.length; i++){
       const arr=array.slice(commands[i][0]-1,commands[i][1]);
        arr.sort((a,b)=>a-b);
        answer[i]=arr[commands[i][2]-1];
    }
            return answer;

}