import sys

# 입력 받기
n = int(sys.stdin.readline().strip())
arr = [int(sys.stdin.readline().strip()) for _ in range(n)]

# 정렬
arr.sort()

# 출력
for num in arr:
    print(num)
