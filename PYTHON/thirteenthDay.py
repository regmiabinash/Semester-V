# strings are immutable(not changeable)
# a="@@Abinash@ @@@@@@@@"
# print(len(a))
# print(a.upper())
# print(a.lower())
# print(a.rstrip("@"))
# print(a.replace("@","Regmi"))
# print(a.split(" "))
# blogHeading="introduction TO js"
# print(blogHeading.capitalize())

str1="welcome to the Console!!!" 
print(len(str1))
# print(str1.center(50))

print(str1.count("a"))
print(str1.endswith("e"))
# print(str1.count("o"))
print(str1.endswith("!"))
print(str1.endswith("to",7,10))

str1="His name is Dan. He is an honest man."
print(str1.find("Dan"))
# print(str1.index("Dana"))

str1="WelcometotheCOnsole"
str2="WelcometotheC0nsole"
print(str1.isalnum())
print(str2.isalpha())
print(str2.islower())
a="  "
print(a.islower())
print(a.isprintable())
print(a.isspace())

str1="World Health organization"
print(str1.istitle())

str1="ok"
print(str1.istitle())

a="Python is a programming language"
print(a.startswith("P"))
print(str2.swapcase())


str1="My name is Abinash Regmi."
print(str1.title())



