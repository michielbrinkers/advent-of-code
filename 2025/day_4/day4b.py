# https://adventofcode.com/2025/day/4

# load input file
file = "input4.txt"
# file = "example4.txt"
with open(file, "r") as file:
	lines = []
	for line in file.read().split("\n")[0:-1]: # drop last empty line
		lines.append(list(line))

def print_lines():
	print("\n".join(list(map(lambda line: "".join(line), lines))))

# print_lines()

w, h = len(lines[0]), len(lines)
sum = 0
while True:
	accessible = []
	for y in range(h):
		for x in range(w):
			if lines[y][x] == "@":
				# count neighboring roles. substract 1 for the roll itself
				cnt = -1
				for yoff in range(max(0,y-1),min(y+2,h)):
					for xoff in range(max(0,x-1),min(x+2,w)):
						if lines[yoff][xoff] == "@":
							cnt += 1
				if cnt < 4:
					accessible.append({"x": x, "y": y})

	for c in accessible:
		lines[c["y"]][c["x"]] = "x"
	# print_lines()
	
	sum += len(accessible)
	if len(accessible) == 0:
		break

print(sum)
