# tup = (1,2,3,"Abinash", True)
# print(tup[:3]
# )# tup[0] = 90 typle is not changeable like list
# print(type(tup),tup)
# print(len(tup),tup)
# print(tup[0])
# print(tup[1])
# print(tup[-1])
# print(tup[2])

# if "Abinash" in tup:
#     print("yes Abinash is present in this tuple")

# tup2=tup[1:3]
# print(tup2)

# tuples are immutable
# lists and strings are mutable

countries=("Nepal", "Russia", "India","Portugal")
temp = list(countries)
temp.append("Argentina") #add item
temp.pop(2) #remove item
temp[2] = "France"
countries = tuple(temp)
print(countries)

countries2=("Korea", "Japan","Italy")
footballPlayingcountries = countries+countries2
print(footballPlayingcountries)

tuple1 = (0,1,2,3,4,5,6)
# res=tuple1.count(4)
# res=tuple1.index(3,3,7)
res = len(tuple1)
print("count of 3 in tuple is:",res)


