# https://adventofcode.com/2025/day/6
import math

# load input file
use_example = False
with open("input6.txt" if not use_example else "example6.txt", "r") as file:
	lines = file.read().splitlines()

ops = [(i,ch) for i,ch in enumerate(lines.pop()) if ch in "+*"]
lengths = [b[0] - a[0] - 1 for a, b in zip(ops, ops[1:])]
lengths.append(len(lines[0]) - ops[-1][0])

summed = 0
for (idx, op), d in zip(ops, lengths):
	vals = [
		int("".join(line[idx+i] for line in lines))
		for i in range(d)
	]
	summed += sum(vals) if op == "+" else math.prod(vals)

print(summed)
# 11950004808442