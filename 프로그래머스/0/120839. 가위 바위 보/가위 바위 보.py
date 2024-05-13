def solution(rsp):
    str = ''
    for i in rsp:
        if i=="2":
            str+="0"
        elif i=="0":
            str+="5"
        else :
            str+="2"
    return str