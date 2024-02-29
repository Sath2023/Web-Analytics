num = int(input("Enter the number : "))
sum = 0
square = num * num
while(square > 0):
    rem = square % 10
    sum = sum + rem
    square = square // 10
    print(sum)
if(num == sum):
    print("It is neon number")
else:
    print("It is not neon number")