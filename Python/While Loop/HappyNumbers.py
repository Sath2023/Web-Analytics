n = int(input("Enter a number :"))
num = n
sum = 0
while(num > 0):
    r = num % 10
    sum = sum + (r*r)
    num = num // 10
print(sum)
