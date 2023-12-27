function solution(my_string, alp) {
    if(my_string.includes(alp)===true)
    {my_string=my_string.replaceAll(alp,alp.toUpperCase());
    return my_string}
    else{return my_string}
    
}