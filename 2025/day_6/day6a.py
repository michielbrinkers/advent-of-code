# https://adventofcode.com/2025/day/6
import math

# load input file
use_example = False
with open("input6.txt" if not use_example else "example6.txt", "r") as file:
	lines = file.read().splitlines()

ops = [op for op in list(lines.pop()) if op != " "]
rows = [[int(l) for l in line.split(" ") if l!=""] for line in lines]
columns = [list(col) for col in zip(*rows)]

results = [
	sum(col) if op=="+" else math.prod(col)
	for (op, col) in zip(ops,columns)
]
print(sum(results))
# 6299564383938