function solution(s) {
    var result=[];
    var answer=0;
    let str=s.split(' ');
    for(let i=0;i<str.length;i++){
        if(str[i]==='Z'){
            result.pop();
        }else{
            result.push(str[i]);
        }
    }
    console.log(result);
    var arr=result.map(Number);
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        answer+=arr[i];
    }
    return answer;
}