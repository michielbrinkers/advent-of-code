# https://adventofcode.com/2025/day/5

# load input file
use_example = False
with open("input5.txt" if not use_example else "example5.txt", "r") as file:
	lines = file.read().splitlines()

# print(lines)
ranges = [tuple(map(int, line.split("-"))) for line in lines[:lines.index("")]]
ranges.sort(key =lambda x: x[0])

merged = {}
for range in ranges:
	rs,re = range
	xrange = {s: e for s, e in merged.items() if (rs >= s and rs <= e) or (re >= s and re <= e) }
	if xrange:
		xs,xe = min(xrange.keys()), max(xrange.values())
		for key in xrange.keys():
			del merged[key]
		merged[min(xs,rs)] = max(xe,re)
	else:
		merged[rs] = re

fresh = 0
for s,e in merged.items():
	fresh += e-s+1
print(fresh)
# 348548952146313