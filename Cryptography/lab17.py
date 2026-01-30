def elgamal_detailed():
    q, alpha = 71, 7
    xa = 12 # Alice's private key
    ya = pow(alpha, xa, q) # Alice's public key
    
    m = 30 # Message
    k = 5  # Random integer for encryption
    
    # Encryption
    K = pow(ya, k, q)
    c1 = pow(alpha, k, q)
    c2 = (K * m) % q
    print(f"Ciphertext: (C1={c1}, C2={c2})")

    # Decryption
    # Find K again using Alice's private key
    K_back = pow(c1, xa, q)
    # Multiply C2 by modular inverse of K_back
    # Inverse using Fermat's (K^(q-2))
    k_inv = pow(K_back, q-2, q)
    recovered_m = (c2 * k_inv) % q
    print(f"Decrypted Message: {recovered_m}")

elgamal_detailed()