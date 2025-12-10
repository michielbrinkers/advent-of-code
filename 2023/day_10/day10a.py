# https://adventofcode.com/2025/day/6
use_example = False
with open("input10.txt" if not use_example else "example10.txt", "r") as file:
	lines = file.read().splitlines()

class Grid:
	def __init__(self, lines):
		self.lines = lines
		self.w = len(lines[0])
		self.h = len(lines)
		self.buffer =  bytearray(("." * self.w * self.h).encode())

	def __repr__(self):
		return "\n" + "\n".join( self.buffer[self.w * y : self.w * y + self.w].decode()  for  y in range(self.h)) + "\n"

	def setChar(self, x, y, c):
		self.buffer[self.w * y + x] = ord(c)

	def getChar(self, x, y):
		if x < 0 or x >= self.w or y < 0 or y >= self.h:
			return "."
		return chr(self.buffer[self.w * y + x])

	def getSourceChar(self, x, y):
		if x < 0 or x >= self.w or y < 0 or y >= self.h:
			return "."
		return self.lines[y][x]


head: [tuple[int,int]] = [next((int(i), lines.index(line)) for line in lines for i,ch in enumerate(line) if ch == "S")]

grid = Grid(lines)
grid.setChar(head[0][0],head[0][1], '0')

# data for going to a direction
up,right,down,left = (0,-1,"|7F"), (1,0,"-J7"), (0,1,"|LJ"),(-1,0,"-LF")
# possible directions for a pipe connection
pipe_connections = {
	"|": [up, down],
	"-": [left, right],
	"L": [right, up],
	"J": [left, up],
	"7": [left, down],
	"F": [right, down],
	"S": [up, left, down, right]
}

step = 0
while len(head) > 0:
	step += 1
	head_cp = head[:]
	for pos in head_cp:
		px, py = pos
		pos_char = grid.getSourceChar(px, py)
		pos_conns = pipe_connections[pos_char]
		for connection in pos_conns:
			cx,cy,cc = connection
			target_char = grid.getChar(px+cx, py+cy)
			if target_char != ".":
				continue
			source_char = grid.getSourceChar(px+cx, py+cy)
			if source_char in cc:
				grid.setChar(px+cx, py+cy, str(step%10))
				head.append((px+cx, py+cy))
		head.remove(pos)

print(grid)
print("iterations:", step-1) #-1 because the last step is just to stop the search
#6843

