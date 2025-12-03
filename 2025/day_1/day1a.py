# https://adventofcode.com/2025/day/1

# load input file
turns = [];
with open("input1.txt", "r") as file:
	for line in file:
		if not(line): continue
		else:
			instruction = line.replace("\n","")
			sign =  -1 if instruction[0] == "L" else 1
			value = int(instruction[1:]) % 100
			turns.append(sign * value)

# print (turns)

value, zeros = 50, 0
for v in turns:
	value += v
	if value < 0: value += 100
	if value > 99: value -= 100
	if value == 0: zeros += 1

print(zeros)
# 1195
