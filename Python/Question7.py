n = int(input("Enter a number : "))
rev = 0
temp = n
while temp > 0:
    rem = temp % 10
    rev = (rev * 10) + rem
    n = n // 10
if rev==temp:
    print("It is a palindrome number")
else:
    print("It is not a palindrome number")