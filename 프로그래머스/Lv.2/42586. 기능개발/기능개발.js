function solution(progresses, speeds) {
    var answer = [];
    var daysToFinish=[];
    
    // 각 작업이 완료되기까지 필요한 일수 계산
    for(let i=0;i<progresses.length;i++){
        const progress=progresses[i];
        const speed=speeds[i];
        daysToFinish.push(Math.ceil((100-progress)/speed));
    }
    console.log(daysToFinish);
    
     // 배포 작업 수 계산
    let dayCount=1;
    let prevDay=daysToFinish[0];
    for(let i=1;i<daysToFinish.length;i++){
        const currentDay=daysToFinish[i];
        if(prevDay>=currentDay){
            dayCount++;
        }
        else{
            answer.push(dayCount);
            dayCount=1;
            prevDay=currentDay;
            
        }
    }
    answer.push(dayCount);
    return answer;
}