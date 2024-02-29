fib1 = 0
fib2 = 1
num = int(input("Enter the number : "))
while(num > 0):
    print(fib1)
    fib = fib1 + fib2
    fib1 = fib2
    fib2 = fib
    num = num - 1