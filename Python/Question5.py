weight = int(input("Enter the weight : "))
if((weight>50) and (weight<60)):
    print("Belongs to group A")
elif((weight>61) and (weight<70)):
    print("Belongs to group B")
elif((weight>70) and (weight<80)):
    print("Belongs to group C")
elif(weight>80):
     print("Belongs to group D")
else:
    print("Under weight")