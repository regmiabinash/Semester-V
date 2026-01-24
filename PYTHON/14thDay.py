# # a=int(input("Enter your age:"))
# # print("Your age is:",a)

# # print(a>18)
# # print(a<=18)
# # print(a==18)
# # print(a<=18)
# # print(a!=18)

# # if a>18:
# #     print("Yay! You are eligible to drive")
# #     print("congratulations!")
# # else:
# #     print("Warning! You are not eligible to drive")
# #     print("Sorry")

# #     print("wow")

# # #Conditional Operators
# # # >, <, <=, >=, ==

# # num=int(input("Enter the value of num:"))
# # if (num<0):
# #     print("Number is negative.")
# # elif (num==0):
# #     print("Number is zero.")
# # elif (num==99):
# #     print('Number is less than 100')
# # else:
# #     print('Number is positive.')
# # print("Thanks for using the program.")

# # num=int(input("enter a number:"))
# num = 18
# if (num<0):
#     print("Number is negative." )
# elif (num>0):
#     if(num <=10):
#         print("Number is between 1 and 10.")
#     elif(num <=20):
#         print("Number is between 11 and 20.")   
#     else:
#         print("Number is greater than 20.") 
# else:
#     print("Number is zero.")
# print("Thanks for using the program.")  

import time
timestamp=time.strftime("%H:%M:%S")
print(timestamp)
timestamp=int(time.strftime("%H"))
print(timestamp)
timestamp=int(time.strftime(" %S"))
print(timestamp)

if timestamp<12:
    print("Good Night")