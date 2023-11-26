function test(a,b){
    return b-a;
}
function solution(n) {
    let answer=0;
    const str=String(n);
    const mapfn=(arg)=>Number(arg);
    const newArr=Array.from(str,mapfn);
    newArr.sort(test);
    let numStr=newArr.join('');
    answer=parseInt(numStr);
    return answer;
}