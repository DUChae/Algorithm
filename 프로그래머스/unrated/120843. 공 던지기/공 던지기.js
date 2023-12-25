function solution(numbers, k) {
    return numbers[(k-1)*2%numbers.length];
}
//i+=2로 가야하는데...마지막 인덱스 다음은?
//1.length:4 [0,1,2,3]=>2,0,2,0
//2.length:6 [0,1,2,3,4,5]=>2,4,0,2,4
//3.length:3 [0,1,2]=>2,1,0,2,1,0