function solution(s) {
    let numbering=["zero","one","two","three","four","five","six","seven","eight","nine"];
    let test=s;
    for(let i =0 ; i<numbering.length;i++){
        let arr=test.split(numbering[i]);
        test=arr.join(i);
    }
return Number(test);}
