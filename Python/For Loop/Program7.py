# RIGHT ANGLE TRIANGLE

n = 10
for i in range(n):
    for j in range(n):
        if i==n-1 or j==n-1 or i+j==n-1:
            print("*",end=" ")
        else:
            print(" ",end=" ")
    print()