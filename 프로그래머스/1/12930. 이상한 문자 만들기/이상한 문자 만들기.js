function solution(s) {
    const str=s.toUpperCase().split(' ');
    const result=str.map((v)=>{
       return  v.split('').map((char,idx)=>idx%2!==0?char.toLowerCase():char).join('')
    }).join(' ')
    return result;
}