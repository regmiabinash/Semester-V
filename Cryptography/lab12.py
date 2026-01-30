def gcd(a, b):
    while b: a, b = b, a % b
    return a

def implement_theorems(n, a):
    # 1. Euler's Totient (Manual Count)
    coprimes = [i for i in range(1, n) if gcd(i, n) == 1]
    phi = len(coprimes)
    print(f"Coprimes of {n}: {coprimes} -> phi({n}) = {phi}")

    # 2. Euler's Theorem: a^phi(n) % n == 1
    res = (a ** phi) % n
    print(f"Euler's Theorem: {a}^{phi} mod {n} = {res}")

    # 3. Fermat's Little Theorem (if n is prime)
    # Testing with a prime p
    p = 7
    fermat = (a ** (p-1)) % p
    print(f"Fermat's Theorem: {a}^({p}-1) mod {p} = {fermat}")

implement_theorems(10, 3)