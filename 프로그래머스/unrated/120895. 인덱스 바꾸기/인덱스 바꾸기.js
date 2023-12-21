function solution(my_string, num1, num2) {
    var answer = '';
    const arr=my_string.split('');
    [arr[num1],arr[num2]]=[arr[num2],arr[num1]];
        answer=arr.join('');
return answer;}
//배열로 바꾸면? ['h','e','l','l','o']