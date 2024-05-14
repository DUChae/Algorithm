def solution(num_list):
    answer=-1
    for index,i in enumerate(num_list):
        if i<0:
            return index
    return answer