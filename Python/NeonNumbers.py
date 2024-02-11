n = int(input("Enter the number : "))
sum = 0
square = n * n
while(square != 0):
    r = square % 10
    sum = sum + r
    square = square // 10
if(n == sum):
    print("It is neon number")
else:
    print("It is not neon number")