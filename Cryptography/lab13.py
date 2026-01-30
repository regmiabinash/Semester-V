def poly_ops(p1, p2):
    # Addition: Align by padding zeros at the start
    diff = abs(len(p1) - len(p2))
    if len(p1) < len(p2): p1 = [0]*diff + p1
    else: p2 = [0]*diff + p2
    
    addition = [p1[i] + p2[i] for i in range(len(p1))]
    print(f"Poly Add: {addition}")

    # Multiplication: Distributive property
    # Create result list of size (len1 + len2 - 1)
    res_mult = [0] * (len(p1) + len(p2) - 1)
    for i in range(len(p1)):
        for j in range(len(p2)):
            res_mult[i + j] += p1[i] * p2[j]
            print(f"  Step: p1[{i}]*p2[{j}] -> adds {p1[i]*p2[j]} to index {i+j}")
    
    print(f"Poly Multiply: {res_mult}")

poly_ops([1, 2], [1, 0, 1]) # (x+2) * (x^2+1)