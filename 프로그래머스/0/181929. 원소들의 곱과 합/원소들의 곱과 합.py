from math import prod
def solution(num_list):
    a= prod(num_list)
    b= sum(num_list)
    return 1 if a<pow(b,2) else 0