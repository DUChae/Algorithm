function solution(s) {
    const num=/^[0-9]*$/;
    return (s.length===4||s.length===6)&&num.test(s);
}