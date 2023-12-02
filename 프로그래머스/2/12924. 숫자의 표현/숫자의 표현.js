function solution(n) {
    let count=0; //가짓수를 count로 표현
    for(let i =1;i<=n;i++){ //첫 정수의 시작 i 
       let sum=0;
        for(let j=i;j<=n;j++){ //j는 i에서부터 1씩 증가하여 15맞추기
            sum+=j;
            if(sum===n){
                count++;
                break;
            }
            if(sum>n){
                break;
            }
        }
    }
return count;}