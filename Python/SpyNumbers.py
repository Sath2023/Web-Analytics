n = int(input("Enter the number :"))
sum = 0
product = 1
num = n
while(num > 0):
    r = num % 10
    sum = sum + r
    product = product * r
    num = num // 10
if(sum == product):
    print("It is spy number")
else:
    print("It is not a spy number")