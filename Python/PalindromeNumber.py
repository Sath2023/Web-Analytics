n = int(input("Enter a number : "))
temp = n
rev = 0
while temp > 0:
    rem = temp % 10
    rev = (rev * 10) + rem
    temp = temp // 10
if n==rev:
    print("It is a palindrome number")
else:
    print("It is not a palindrome number")