# https://adventofcode.com/2025/day/6
use_example = False
with open("input9.txt" if not use_example else "example9.txt", "r") as file:
	lines = file.read().splitlines()

coords = [[*map(int, line.split(","))] for line in lines]

largest = 0
for coord1 in coords:
	for coord2 in coords:
		if coord1 is coord2: continue
		dx = abs(coord2[0]-coord1[0]) + 1 # inclusive of coord2
		dy = abs(coord2[1]-coord1[1]) + 1
		size = dx*dy
		if size > largest: 
			largest = size
print(largest)
# 4771508457