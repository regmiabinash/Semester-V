def calculateGmean(a,b):
    mean=(a*b)/(a+b)
    print(mean)

def isGreater(a,b):
    if(a>b):
        print("first number is smaller")

    else:
        print("second number is smaller or equal")

def isSmaller(a,b):
    if(a<b):
        print("first number is greater")

    else:
        print("second number is greater or equal")

a=9
b=8
# if(a>b):
#     print("first number is greater")

# else:
#     print("second number is greater or equal")
# gmean1=(a*b)/(a+b)
# print(gmean1)
c=8
d=7
# if(c>d):
#     print("first number is greater")

# else:
#     print("second number is greater or equal")

# calculateGmean(a,b)
# calculateGmean(c,d)
# isGreater(a,b)
# isGreater(c,d)
# isSmaller(a,b)
# isSmaller(c,b)

# gmean2=(c*d)/(c+d)
# print(gmean2)

# def average(a=2,b=6):
#     print("The average is", (a+b)/2)

# # average(4, 6)

# average()

# def name(fname,mname="Raj", lname="Regmi"):
#     print("Hello",fname,mname,lname)

# name(lname="Bhandari", fname="Rekha")

# //tuples
def average(*numbers):
    sum=0
    for i in numbers:
        sum = sum + i
    # print("Average is:", sum/len(numbers))
    # return 11
    return sum/len(numbers)

c=average(5,6,7,8,9)
print(c)

# # //dictionary
# def name(**name):
#     # print(type(name))
#     print("Hello,", name["fname"], name["mname"], name["lname"] )

# name(mname="Raj", lname="Regmi", fname="Toya")