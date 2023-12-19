function solution(my_string) {
    return my_string.split("").reverse().join("");
}
/*// 1. split() 메서드를 사용해 새 배열을 반환하기
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // 2. reverse() 메서드를 사용해 새 배열의 순서를 뒤집기
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // 3. join() 메서드를 사용해 배열의 모든 요소를 문자열로 결합하기
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    // 4. 반전된 문자열을 반환하기
    return joinArray; // "olleh"*/