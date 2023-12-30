function solution(myString) {
    const result=myString.split('').map((v)=>{
        return v<'l'?'l':v
    } ).join('');
    return result;
}