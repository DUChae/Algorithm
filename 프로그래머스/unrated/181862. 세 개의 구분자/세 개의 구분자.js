function solution(myStr) {
         const str=myStr.split(/[abc]/).filter(item=>item.length!==0)
        return str.length!==0?str:["EMPTY"]
    
}