def solution(arr, k):
    result=[]
    if k%2==1:
        for i in arr:
            result.append(i*k)
    else :
        for i in arr:
            result.append(i+k)
    return result