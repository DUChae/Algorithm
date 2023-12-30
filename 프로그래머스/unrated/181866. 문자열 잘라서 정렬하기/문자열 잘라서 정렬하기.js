function solution(myString) {
    return myString.split('x').filter((item)=>item.length!==0).sort();
  }