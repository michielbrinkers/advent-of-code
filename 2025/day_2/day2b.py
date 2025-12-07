# https://adventofcode.com/2025/day/2
use_example = False
with open("input2.txt" if not use_example else "example2.txt", "r") as file:
	lines = file.read().splitlines()

ranges = [
	tuple(int(n) for n in line.split("-"))
	for line in lines.pop().split(",")
]

def is_invalid_id(pid: str) -> bool:
	str_len = len(pid)
	return any(
		pid == pid[:le] * int(str_len/le)
		for le in range(str_len//2, 0, -1)
		if str_len % le == 0
	)

total = sum([
	pid 
	for start, end in ranges
	for pid in range(start, end+1)
	if is_invalid_id(str(pid))
])

print(total)
# 4174379265