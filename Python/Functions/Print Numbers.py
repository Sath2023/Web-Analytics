def num(s):
    if s==0:
        return
    num(s-1)
    print(s)

num(5)