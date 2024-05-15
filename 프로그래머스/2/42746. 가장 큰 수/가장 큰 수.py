import functools
def comparator(a,b):
    x=a+b
    y=b+a
    if x>y:
        return 1
    elif x==y:
        return 0
    else:
        return -1
    
def solution(numbers):
    
    a=[str(i) for i in numbers]
    b=sorted(a,key=functools.cmp_to_key(comparator),reverse=True)
    result=str(int(''.join(b)))
    return result
