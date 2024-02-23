num = int(input("Enter the number : "))
sum = 0
while(num > 0):
    fact = 1
    last = num % 10
    while (last > 0):
        fact = fact * last
        last = last - 1
    num = num // 10
    sum = sum + fact
print(sum)

if(sum == num):
    print("It is a strong number")
else:
    print("It is not a strong number")