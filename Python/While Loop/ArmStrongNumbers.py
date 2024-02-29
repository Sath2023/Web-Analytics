num = int(input("Enter a number : "))
temp = num
sum = 0
count = len(str(num))
while(num > 0):
    rem = num % 10
    sum = sum + (rem ** count)
    num = num // 10

if temp==sum:
    print("It is an Armstrong Number")
    print(sum)
else:
    print("It is not an Armstrong Number")