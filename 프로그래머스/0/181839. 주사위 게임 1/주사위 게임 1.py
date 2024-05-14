import math
def solution(a, b):
    result=0
    if a%2==1 and b%2==1:
        result+=pow(a,2)+pow(b,2)
    elif (a%2==1 and b%2==0) or (a%2==0 and b%2==1):
        result+=2*(a+b)
    else:
        result+=abs(a-b)
    return result