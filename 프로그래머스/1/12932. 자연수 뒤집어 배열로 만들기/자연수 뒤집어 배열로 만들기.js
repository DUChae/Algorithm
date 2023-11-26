//Array.from(arrayLike[, mapFn[, thisArg]])
function solution(n) {
    let answer=[];
    const str= String(n);
    const mapfn=(arg)=>Number(arg)
    const newArr = Array.from(str, mapfn);
    for(let i =newArr.length-1;i>=0;i--){
        answer.push(newArr[i]);
    }
    return answer;
}