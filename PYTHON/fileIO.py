# # reading a file
# # fun = open('myfile1.txt','rt')
# # # print(fun)
# # o="yay"
# # text=fun.read()
# # print(text)
# # fun.close()

# # writing a file
# # f = open('myfile.txt', 'a')
# # f.write('hello from earth')
# # f.close()

# # with open('myfile.txt','w') as f:
# #     f.write('Hey I am under the water')

# f=open('myfile.txt', 'r')
# i=0
# while True:
#     i=i+1
#     line=f.readline()
#     if not line:
#         break        # print(line,type(line))
    
#     m1=int(line.split(",")[0])
#     m2=int(line.split(",")[1]) 
#     m3=int(line.split(",")[2])
#     print(f"marks of student {i} in Maths is:{m1*2}")
#     print(f"marks of student {i} in English is:{m2*2}")
#     print(f"marks of student {i} in Nepali is:{m3*2}")
#     print(line)

f=open('myfile1.txt','w')
lines=['line 1\n','line 2\n', 'line 3\n']
f.writelines(lines)
f.close()