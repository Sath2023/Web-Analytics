a = [12,21,36,55,48,6,7]
print("Before sorting")
print(a)
num = a[0]
for i in range(len(a)):
    for i in range(0, len(a)):
        for j in range(i+1, len(a)):
            if (a[i] > a[j]):
               a[i], a[j] = a[j],a[i]
print("After Sorting")
print(a)