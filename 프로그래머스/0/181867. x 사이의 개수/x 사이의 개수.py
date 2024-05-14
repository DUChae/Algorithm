def solution(myString):
    answer = []
    str=myString.split('x')
    for i in str:
        answer.append(len(i))
    return answer