def solution(array):
    arr=sorted(array,reverse=True)
    return [arr[0],array.index(arr[0])]