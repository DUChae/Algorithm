function solution(num_list) {
    var length=num_list.length-1;
    if(num_list[length]>num_list[length-1]){
        num_list.push(num_list[length]-num_list[length-1]);
    }else{
        num_list.push(num_list[length]*2);
    }
    return num_list;
}