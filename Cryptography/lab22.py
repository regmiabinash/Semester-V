# Lab 22: Digital Signature Simulation (RSA Logic)
import hashlib

def digital_signature_demo():
    print("--- RSA Digital Signature Simulation ---")
    # 1. Key Generation (Small primes for simulation)
    p, q = 61, 53
    n = p * q
    phi = (p-1) * (q-1)
    e = 17
    d = pow(e, -1, phi) # Private Key
    
    # 2. Signing
    message = "Digital Signature Assignment"
    msg_hash = int(hashlib.sha256(message.encode()).hexdigest(), 16) % n
    signature = pow(msg_hash, d, n)
    print(f"1. Message signed. Signature: {signature}")
    
    # 3. Verification
    verified_hash = pow(signature, e, n)
    print(f"2. Verification: {'Success' if msg_hash == verified_hash else 'Failed'}")

digital_signature_demo()