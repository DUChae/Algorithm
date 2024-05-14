def solution(start, end_num):
    result=[]
    while start>=end_num:
        result.append(start)
        start-=1
    return result