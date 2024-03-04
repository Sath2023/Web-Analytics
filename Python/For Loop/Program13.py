n=5
k=5
for i in range (n):
    for j in range (n):
        if i==j or i+j==n-1:
            print(k,end=" ")
        else:
            print(" ",end=" ")
    k=k-1
    print()