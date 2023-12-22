function solution(before, after) {
    const newBefore=before.split('').sort();
    const newAfter=after.split('').sort();

    if(newBefore.toString()===newAfter.toString()){return 1;}
    else{return 0;}
}