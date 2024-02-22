weight = int(input("Enter the weight : "))
if(weight < 50):
    print("Under Weight")
elif((weight>50) or (weight<=60)):
    print("Belongs to group A")
elif((weight>61) or (weight<=70)):
    print("Belongs to group B")
elif((weight>70) or (weight<=80)):
    print("Belongs to group C")
elif(weight>80):
     print("Belongs to group D")
else:
    print("Error")