num = int(input("Enter a number :"))
sum = 0
product = 1
temp = num
while(temp > 0):
    rem = temp % 10
    sum = sum + rem
    product = product * rem
    temp = temp // 10
if(sum == product):
    print("It is spy number")
else:
    print("It is not a spy number")