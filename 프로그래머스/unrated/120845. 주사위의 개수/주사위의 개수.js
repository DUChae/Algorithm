function solution(box, n) {
    var testing=1;
    for(let i=0;i<box.length;i++){
        testing*=Math.floor(box[i]/n);
    }
    return testing;
}

//각 배열에 3이 몇개까지 들어가나?
//3*2*2=12