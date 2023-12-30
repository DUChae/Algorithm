function solution(str_list, ex) {
    const found=str_list.filter(v=>!v.includes(ex));
    return found.length!==0?found.join(''):'';
}