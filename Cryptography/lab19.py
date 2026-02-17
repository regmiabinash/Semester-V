# Lab 19: MD4 Implementation (Logic Simulation)
import struct

def md4_step_by_step(message):
    print("--- MD4 Step-by-Step ---")
    data = bytearray(message, 'utf-8')
    
    # Step 1: Padding
    orig_len_bits = (len(data) * 8) & 0xffffffffffffffff
    data.append(0x80)
    while len(data) % 64 != 56:
        data.append(0x00)
    
    # Step 2: Append Length
    data += struct.pack('<Q', orig_len_bits)
    print(f"1. Padding complete. Processed length: {len(data)} bytes")

    # Step 3: Initialize MD Buffer (A, B, C, D)
    A, B, C, D = 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476
    print(f"2. Buffers initialized: A={hex(A)}, B={hex(B)}")
    
    # Step 4: Process Message in 16-word blocks (Simplified)
    print("3. Round functions (F, G, H) applied to blocks...")
    print("MD4 Simulation Complete.")

md4_step_by_step("Hello World")