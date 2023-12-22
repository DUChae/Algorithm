function solution(my_string) {
    const str=my_string.split('').map((value)=> value.toLowerCase()).sort().join('');
    return str;
   
}