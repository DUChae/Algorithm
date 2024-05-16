n = input()
numbers = [int(numbers) for numbers in n]
reversing = sorted(numbers, reverse=True)
result = ''.join(map(str, reversing))
print(result)