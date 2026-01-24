# def func1():
#     try:
#         n=[1,3,4,7,9,11]
#         i=int(input('Enter a number:'))
#         print(n[i])
#         return 1
#     except:
#         print('some error occured')
#         return 0
#     finally:
#         print('I am always implemented')

# x = func1()
# print(x)

# local vs global variables in python
# x=69
# print(x)

# def hello():
#     x="69 is not just a word"
#     print(f"The local x is {x}")
#     print('Hello harry')

# print(f"The global x is {x}")
# hello()
# print(f"The global x is {x}")

x=9
 
def my_fuc():
    global x
    x=4
    # print(x)
    y=7
    print(y)

my_fuc()
print(x)
# print(y) #this will cause an error cause y only exist within an function and doesn't exist outside
