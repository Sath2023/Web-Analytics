a = [12,21,36,55,48,6,7,55]
max = a[0]
secondmax = a[0]
for i in a:
    if(i > max):
        secondmax = max
        max = i
    elif(i > secondmax and i!=max):
        secondmax = i
print("The second maximum number is : ",secondmax)