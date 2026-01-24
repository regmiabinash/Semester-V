letter = "Hey my name is {1} and I am from {0}"
country = "India"
name="Harry"

# print(letter.format(country,name))
print(f"Hey my name is {name} and I am from {country}")

# txt = "For only {price:.2f} dollars!"
# print(txt.format(price=69.696969))
price=69.999

txt=f"For only {price:.2f} dollars!"
print(txt)

# print(f"For only{price:.1f}dollars!")

print(type(
    f"{2*12}"))

print(f"Hey my name is {{name}} and I am from {{country}}")
