# https://adventofcode.com/2025/day/6
use_example = False
with open("input7.txt" if not use_example else "example7.txt", "r") as file:
	lines = file.read().splitlines()[::2] # even lines only, because we don't need the ... lines

beams = set([lines.pop(0).find("S")])

split_count = 0
for line in lines:
	splits = [i for i,ch in enumerate(line) if ch == "^"]
	for b in beams.copy():
		if b in splits:
			beams.remove(b)
			beams.add(b-1)
			beams.add(b+1)
			split_count += 1
print(split_count)
# 1585