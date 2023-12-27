function solution(a, b) {
    let first=Number(a.toString()+b.toString());
    let second=2*a*b;
    return first>=second?first:second;
    
}