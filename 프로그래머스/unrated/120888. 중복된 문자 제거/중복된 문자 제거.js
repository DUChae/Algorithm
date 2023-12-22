function solution(my_string) {
   
    const str=[...new Set(my_string)].join('');
    return str;
}