function solution(str1, str2) {
    let result=[];
    let arrStr1=str1.split('');
    let arrStr2=str2.split('');
    for(let i=0;i<arrStr1.length;i++){
        result.push(arrStr1[i]);
        result.push(arrStr2[i]);
    }
    return result.join('');
    
}