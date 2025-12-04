# https://adventofcode.com/2025/day/4

# load input file
with open("input4.txt", "r") as file:
	lines = file.read().split("\n")[0:-1] # drop last empty line

w, h = len(lines[0]), len(lines)
accessible = 0
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
				accessible += 1

print(accessible)
# 1523