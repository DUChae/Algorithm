def solution(citations):
    a=0
    citations.sort(reverse=True)
    for i in citations:
        if i>a:
            a+=1
    return a