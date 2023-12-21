function solution(my_string) {
    var regex = /[^0-9]/g;				
    var result = my_string.replace(regex, "");
    let testing=result.split('');
    testing.sort((a,b)=>a-b);
    let numberArr=testing.map(Number);    
    return numberArr;
}