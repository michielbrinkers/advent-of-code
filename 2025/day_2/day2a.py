# https://adventofcode.com/2025/day/2
use_example = True
with open("input2.txt" if not use_example else "example2.txt", "r") as file:
	lines = file.read().splitlines()

ranges = [
	tuple(int(n) for n in line.split("-"))
	for line in lines.pop().split(",")
]

total = 0
for r in ranges:
	for i in range(*r):
		val = str(i)
		size = len(val)
		if size % 2 == 1:
			continue
		if val[size//2:] == val[:size//2]:
			total += i

print(total)
# 1227775554