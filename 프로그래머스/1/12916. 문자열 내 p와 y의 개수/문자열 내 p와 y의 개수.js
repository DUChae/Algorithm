function solution(s){
    let Pcount=0;
    let Ycount=0;
    // let str=s.toLowerCase().split('')
    // Pcount=str.filter(el=>'p'===el).length;
    // Ycount=str.filter(el=>'y'===el).length;
    // return Pcount===Ycount?true:false;
    let str=s.toLowerCase().split('').filter(el=>{
        if('p'===el){Pcount++}
        if('y'===el){Ycount++}
    });
    return Pcount===Ycount?true:false;  

    
}