# https://adventofcode.com/2025/day/6
use_example = False
with open("input7.txt" if not use_example else "example7.txt", "r") as file:
	lines = file.read().splitlines()[::2] # even lines only, because we don't need the ... lines

beams = { lines.pop(0).find("S") : 1 }

for line in lines:
	splits = [i for i,ch in enumerate(line) if ch == "^"]
	for b,c in list(beams.items()):
		if b in splits:
			del beams[b]
			beams[b-1] = beams.get(b-1,0) + c
			beams[b+1] = beams.get(b+1,0) + c

print(sum(beams.values()))
# 16716444407407