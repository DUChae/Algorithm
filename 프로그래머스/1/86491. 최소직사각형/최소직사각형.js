function solution(sizes) {
    let maxWidth=0;
    let maxHeight=0;
    for(let i= 0 ; i<sizes.length;i++){
        let [width,height]=sizes[i];
        
        // 명함을 눕혀서 넣을 수 있으므로, 더 긴 길이를 가로로 설정
        if(width<height){
            [width,height]=[height,width];
        }
        
        
        // 가장 큰 가로 길이와 세로 길이를 찾음
      maxWidth=Math.max(maxWidth,width);
        maxHeight=Math.max(maxHeight,height);
    }
    return maxWidth*maxHeight;
}
    //[[60,50],[70,30],[60,30],[80,40]] 만들고 가로의 최댓값 * 세로의 최댓값 = 80 * 50 = 4000
    //[[10, 7], [12, 3], [15, 8], [14, 7], [15, 5]] = 15 * 8 = 120