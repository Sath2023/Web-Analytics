#Write a program to print the given number is negative and convert it into positive format

a = int(input("Enter a number :"))
if(a<0):
    num = a * (-1)
    print(num)
else:
    print("The number is a positive number")


print("")
# Write a python program to check whether the given number is even or odd
b = int(input("Enter a number :"))
if((b % 2)==0):
    print("The number is a positve number")
else:
    print("The number is an odd number")