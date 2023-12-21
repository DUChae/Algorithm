function solution(numbers, direction) {
    //if(right)
    //Unshift,pop
    if(direction==="right"){
       numbers.unshift(numbers.pop());
    }
    //left
    //else
    //shift, push
    else{

        numbers.push(numbers.shift());
    }
    return numbers;
}