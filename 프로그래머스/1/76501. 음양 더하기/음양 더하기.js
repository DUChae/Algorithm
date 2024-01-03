function solution(absolutes, signs) {
    return absolutes.map((v,idx)=>
        signs[idx]===true?v:-v
    ).reduce((a,c)=>a+c);

}