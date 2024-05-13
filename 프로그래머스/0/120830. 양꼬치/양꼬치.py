import math
def solution(n, k):
    a=12000*n
    b=2000*k
    c=math.floor(n/10)
    discount=2000*c
    return a+b-discount
        