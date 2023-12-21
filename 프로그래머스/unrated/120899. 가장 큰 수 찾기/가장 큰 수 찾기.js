function solution(array) {
    var answer = [];
    const arr1=array.slice();
    const arr2=arr1.sort((a,b)=>b-a);
    answer.push(arr2[0]);
    for(let i=0;i<array.length;i++){
        if(array[i]===arr2[0]){
            answer[1]=i;
            break;
        }
    }
return answer;}