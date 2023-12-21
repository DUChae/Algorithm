function solution(hp) {
    var answer = 0;
    let general=Math.floor(hp/5);
    let soldier=Math.floor((hp%5)/3);
    let work=hp-(general*5)-(soldier*3);
    answer=general+soldier+work;
    return answer;
}
//장군 5공격
//병정 3공격
//일개미 1공격