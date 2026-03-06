def multiplicative_congruential_method(X0, a, m, n):
    Xn = X0  # Initialize seed value
    print("\nGenerated Random Numbers [ Multiplicative Congruential Method ]:")
    for i in range(n):
        Xn = (a * Xn) % m  # MCM formula
        print(f"X{i} = {Xn}")  # Print the generated number

# Taking input from the user
X0 = int(input("Enter the seed value: "))
a = int(input("Enter the multiplier: "))
m = int(input("Enter the modulus: "))
n = int(input("Enter the number of random numbers to generate: "))

multiplicative_congruential_method(X0, a, m, n)