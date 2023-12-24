function solution(emergency) {
    var answer = [];
    var arr=[...emergency];
    arr.sort((a,b)=>b-a);
    console.log(arr);
     const indices = emergency.map(value => arr.indexOf(value)+1);
     console.log(indices);
    return indices;
}