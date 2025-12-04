# load input file
with open("input3.txt", "r") as file:
	lines = file.read().split("\n")[0:-1] # drop last empty line

# example
# lines = ["987654321111111","811111111111119","234234234234278","818181911112111"]
# lines = ["811111111111119"]
# print(lines)

def get_max(line, idx, margin):
	if idx > len(line) - margin:
		raise ValueError("idx too high: ", idx, len(line)-margin)

	max = line[idx]
	for i in range(idx+1,len(line)-margin):
		v = line[i]
		if v > max: 
			max, idx = v, i
	return max, idx
###

sum = 0
for line in lines:
	max, idx = get_max(line, 0, 1)
	max2, idx2 = get_max(line, idx+1, 0)
	sum += int(max+max2)

print(sum)