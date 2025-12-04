# load input file
with open("input3.txt", "r") as file:
	lines = file.read().split("\n")[0:-1] # drop last empty line

# example
# lines = ["987654321111111","811111111111119","234234234234278","818181911112111"]
# lines = ["999999999999999"]
# lines = ["234234234234278"]
# lines = ["3443334373333545324339252335233845533545245422755419334136447332543353734352333342352363164324383844"]
# lines = ["1424532124222222254421422423224222232253545224231125421422154425524445252421325221222444516522624512"]

digits, length, sum = list("987654321"), 12, 0
for line in lines:
	take, idx = [], 0

	while (len(take) < length):
		max_idx = len(line) - (length - len(take)) + 1;
		section = line[idx:max_idx]

		for d in digits:
			highest_idx = section.find(d)
			if highest_idx != -1:
				take.append(d)
				idx += highest_idx + 1
				break

	number = int("".join(take))
	sum += number
	
print(sum)
# 173300819005913