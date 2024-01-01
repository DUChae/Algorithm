function solution(myString, pat) {
    const found=myString.lastIndexOf(pat);
    return myString.substr(0,found+pat.length);
}