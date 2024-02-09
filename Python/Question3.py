# Write a python program to check the given character is vowel or not
a = str(input("Enter an alphabet : "))
vowel = ['a','e','i','o','u','A','E','I','O','U']
for i in vowel:
    if a==i:
        print("The given character is a vowel")
        break
else:
    print("It is a consonant")
