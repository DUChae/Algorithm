def solution(array, commands):
    result=[]
    for i,j,k in commands:
        a=array[i-1:j]
        a.sort()
        result.append(a[k-1])
    return result