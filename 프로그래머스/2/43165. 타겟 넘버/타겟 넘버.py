def solution(numbers, target):
    # DFS(Depth-First Search)를 이용하여 타겟 넘버를 만들 수 있는 모든 경우의 수를 탐색하는 함수를 정의합니다.
    def DFS(idx, value):
        nonlocal answer  # 중첩 함수에서 외부 함수의 변수를 변경하기 위해 nonlocal 키워드를 사용합니다.
        N = len(numbers)  # 주어진 숫자 배열의 길이를 구합니다.
        
        # 모든 숫자를 사용하고, 그 합이 타겟 넘버와 같은 경우에는 answer를 1 증가시킵니다.
        if idx == N and value == target:
            answer += 1
            return
        
        # 모든 숫자를 사용한 경우에는 재귀 호출을 종료합니다.
        if idx == N:
            return
        
        # 현재 숫자를 더하는 경우와 빼는 경우를 모두 탐색합니다.
        DFS(idx + 1, value + numbers[idx])  # 현재 숫자를 더한 경우를 탐색합니다.
        DFS(idx + 1, value - numbers[idx])  # 현재 숫자를 뺀 경우를 탐색합니다.
    
    answer = 0  # 타겟 넘버를 만들 수 있는 경우의 수를 저장할 변수를 초기화합니다.
    DFS(0, 0)  # DFS 함수를 호출하여 모든 경우의 수를 탐색합니다.
    return answer  # 타겟 넘버를 만들 수 있는 경우의 수를 반환합니다.
