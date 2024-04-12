function solution(n) {
   const ans= n.toString().split('').sort((a,b)=>b-a).join('');
   return Number(ans);
}