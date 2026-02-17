# Lab 24: Kerberos Protocol Simulation
def kerberos_simulation():
    print("--- Kerberos Authentication Flow ---")
    
    print("1. [AS] Client requests Ticket Granting Ticket (TGT).")
    print("2. [AS] Returns TGT encrypted with user's password hash.")
    
    print("3. [TGS] Client presents TGT to request Service Ticket (ST).")
    print("4. [TGS] Returns ST for the specific Application Server.")
    
    print("5. [APP] Client presents ST to the Application Server.")
    print("6. [APP] Server grants access to resources.")

kerberos_simulation()