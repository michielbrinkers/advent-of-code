# https://adventofcode.com/2025/day/1

# load input file
with open("input1.txt", "r") as file:
	lines = file.read().splitlines()

turns = [
	(-1 if line[0] == "L" else 1) * (int(line[1:]) % 100) 
	for line in lines
]

value, zeros = 50, 0
for v in turns:
	value = (value + v) % 100
	if value == 0: zeros += 1

print(zeros)
# 1195
