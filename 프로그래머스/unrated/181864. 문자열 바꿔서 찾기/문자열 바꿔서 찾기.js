function solution(myString, pat) {
    const change=myString.split('').map((v)=>v==="A"?"B":"A").join('');
    return !change.includes(pat)?0:1;
}