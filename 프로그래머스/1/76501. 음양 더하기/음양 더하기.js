function solution(absolutes, signs) {
    let result=[];
    let sum=0;
    for(let i = 0 ; i<absolutes.length;i++){
        if(signs[i]==true){
            //양수
            result.push(absolutes[i]);
        }
        else{
            //음수
            result.push(absolutes[i]*-1);
        }
    }
    for(let j = 0 ; j<absolutes.length;j++){
        sum+=result[j];
    }
    return sum;
}