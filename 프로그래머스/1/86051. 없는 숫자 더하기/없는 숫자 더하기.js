function test(a,b){
    return a-b;
}
function solution(numbers) {
    let sum = 0;
    const setup=[0,1,2,3,4,5,6,7,8,9];
    let a=[];
    a=numbers.sort(test);
    let difference=setup.filter(x=>!numbers.includes(x));
    console.log(difference);
    for(let i=0 ; i<difference.length;i++){
        sum+=difference[i];
    }
    return sum;
}