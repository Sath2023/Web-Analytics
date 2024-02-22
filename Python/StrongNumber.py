num = 145

sum = 0
while(num > 0):
    fact = 1
    last = num % 10
    while last > 0:
        last = last - 1
        fact = fact * last
    num = num // 10
sum = sum + fact
print(sum)