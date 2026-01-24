# a = input("Enter the number:")
# print(f"Multiplication Table of {a} is: ")


# try:
#     for i in range(1,11):
#         print(f"{int(a)}X{i} = {int(a)*i}")
# except Exception as e:
#     print("!!!!Enter numbers only!!!!")

# print('Some imp lines of code')
# print('End of program')

try:
    num=int(input("Enter a number:"))
    a=[6,9]
    print(a[num])
except ValueError:
    print("Number entered is not an integer")
except IndexError:
    print('INdex error')