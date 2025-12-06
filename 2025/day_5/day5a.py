# https://adventofcode.com/2025/day/5

# load input file
use_example = False
with open("input5.txt" if not use_example else "example5.txt", "r") as file:
	lines = file.read().splitlines()

# print(lines)
ranges = [tuple(map(int, line.split("-"))) for line in lines[:lines.index("")]]
ids = [int(x) for x in lines[lines.index("")+1:]]

# print(ranges, ids)
ranges.sort(key =lambda x: x[0])

fresh = 0
for id in ids:
	matches = [(start,end) for start,end in ranges if id >= start and id <= end]
	if len(matches) > 0:
		fresh += 1

print(fresh)
# 874