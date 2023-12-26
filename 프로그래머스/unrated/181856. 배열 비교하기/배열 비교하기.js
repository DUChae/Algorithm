function solution(arr1, arr2) {
    var result=0;
    let arr1sum=0;
    let arr2sum=0;
    arr1.forEach((num)=>{arr1sum+=num;})
    arr2.forEach((num)=>{arr2sum+=num;})
    if(arr1.length===arr2.length){
        if(arr1sum>arr2sum){result=1;}
        else if(arr1sum<arr2sum){result=-1;}
        else{result=0;}
    }
    else if(arr1.length>arr2.length){result=1;}
    else{result=-1;}
    return result;
}