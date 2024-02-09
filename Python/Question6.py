n = int(input("Enter a number : "))
s = n
b = len(str(n))
sum = 0
while (n!=0):
    r = n % 10
    sum = sum + (r**b)
    n = n//10
if s==sum:
    print("It is an Armstrong Number")
else:
    print("It is not an Armstrong Number")