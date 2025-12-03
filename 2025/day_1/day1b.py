# https://adventofcode.com/2025/day/1

#load input file
turns = [];
with open("input1.txt", "r") as file:
	for line in file:
		if not(line): continue
		else:
			instruction = line.replace("\n","")
			turns.append({
				"sign": -1 if instruction[0] == "L" else 1, 
				"shift":  int(instruction[1:])
				})

value, zeros = 50, 0
for v in turns:
	start_value = value
	sign, shift = v["sign"], v["shift"]

	# add full turns to zeros count
	zeros += shift // 100
	# add remainder to value
	value += sign * (shift % 100)

	if value == 0:
		zeros += 1
	elif value < 0:
		value += 100
		# don't count zero if we came from 0 
		if start_value != 0: zeros += 1
	elif value >= 100:
		value -= 100
		zeros += 1

print(zeros)
# 6770