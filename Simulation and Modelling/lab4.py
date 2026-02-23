import random
import numpy as np
import matplotlib.pyplot as plt

# Get user input for the number of rolls
num_rolls = int(input("Enter the number of dice rolls: "))

# Fair Dice Simulation
fair_rolls = [random.randint(1, 6) for _ in range(num_rolls)]

# Biased Dice Simulation (with predefined probabilities)
biased_probs = [0.1, 0.15, 0.2, 0.25, 0.15, 0.15] # Probabilities for [1, 2, 3, 4, 5, 6]
biased_rolls = np.random.choice([1, 2, 3, 4, 5, 6], size=num_rolls, p=biased_probs)

# Compute observed frequencies
fair_counts = np.bincount(fair_rolls, minlength=7)[1:] # Index 0 is ignored
biased_counts = np.bincount(biased_rolls, minlength=7)[1:]

# Compute observed probabilities
fair_observed_probs = fair_counts / num_rolls
biased_observed_probs = biased_counts / num_rolls

# Expected probabilities
fair_expected_prob = [1/6] * 6 # Equal probability for a fair die
biased_expected_prob = biased_probs # Predefined probabilities

# Print probabilities comparison
print("\nFAIR DICE:")
print(f"{'Face':<5} {'Expected Prob':<15} {'Observed Prob'}")
for i in range(6):
    print(f"{i+1:<5} {fair_expected_prob[i]:<15.4f} {fair_observed_probs[i]:.4f}")

print("\nBIASED DICE:")
print(f"{'Face':<5} {'Expected Prob':<15} {'Observed Prob'}")
for i in range(6):
    print(f"{i+1:<5} {biased_expected_prob[i]:<15.4f} {biased_observed_probs[i]:.4f}")

# Plotting the results - MODIFIED FOR B&W PRINTING
plt.figure(figsize=(10, 5))

# Fair Dice Histogram
plt.subplot(1, 2, 1)
# Observed: Dark gray with diagonal stripes (hatch)
plt.bar(range(1, 7), fair_observed_probs, color='0.3', hatch='//', label='Observed')
# Expected: Light gray with a solid black outline and dots
plt.bar(range(1, 7), fair_expected_prob, color='0.8', edgecolor='black', hatch='..', alpha=0.5, label='Expected')
plt.xticks(range(1, 7))
plt.title("Fair Dice Rolls - Abinash Regmi")
plt.xlabel("Dice Face")
plt.ylabel("Probability")
plt.legend()

# Biased Dice Histogram
plt.subplot(1, 2, 2)
# Observed: Dark gray with cross-hatch (hatch)
plt.bar(range(1, 7), biased_observed_probs, color='0.3', hatch='xx', label='Observed')
# Expected: Light gray with a solid black outline and dots
plt.bar(range(1, 7), biased_expected_prob, color='0.8', edgecolor='black', hatch='..', alpha=0.5, label='Expected')
plt.xticks(range(1, 7))
plt.title("Biased Dice Rolls - Abinash Regmi")
plt.xlabel("Dice Face")
plt.ylabel("Probability")
plt.legend()

plt.tight_layout()
plt.show()