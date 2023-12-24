function solution(letter) {
    var answer = '';
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    const str=letter.split(' ');
    console.log(str);
    const values=str.map((index)=>morse[index]);
    console.log(values);
    values.join('');
    for(let i=0;i<values.length;i++){
        answer+=values[i];
    }
    
    console.log(answer);
    
    return answer;
}