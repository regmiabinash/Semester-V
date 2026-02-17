def check_coprime(a, b):
    # Standard Euclidean Algorithm
    def gcd(x, y):
        while y:
            x, y = y, x % y
        return x

    res = gcd(a, b)
    if res == 1:
        print(f"{a} and {b} are co-prime.")
    else:
        print(f"{a} and {b} are NOT co-prime (GCD is {res}).")

check_coprime(15, 28) # Should be co-prime
check_coprime(12, 18) # Should not be