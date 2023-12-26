function solution(arr, k) {
    var answer = [];
    return k%2!==0?answer=arr.map(v=>v*k):answer=arr.map(v=>v+k);   
}