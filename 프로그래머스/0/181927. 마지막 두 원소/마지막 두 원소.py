def solution(num_list):
    answer = []
    last=num_list[len(num_list)-1]
    prelast=num_list[len(num_list)-2]
    if last>prelast:
         num_list.append(last-prelast)
    else:
         num_list.append(last*2)
    return num_list
    