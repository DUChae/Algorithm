function solution(n) {
    var answer = 0;
    let ThreeN=n.toString(3);
    let ReverseThreeN=ThreeN.split("").reverse().join("");
    let TenReverseThreeN= parseInt(ReverseThreeN,3);
    return TenReverseThreeN;
}