import itertools

def getMask(current, buttons):
	c = sum([1<<idx for idx in current])
	mask = [{i:n} for (i,n) in enumerate([sum([1<<idx for idx in combo]) for combo in buttons])]
	print(c, mask)

# [.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
# You could press the first three buttons once each, a total of 3 button presses.
# You could press (1,3) once, (2,3) once, and (0,1) twice, a total of 4 button presses.
# You could press all of the buttons except (1,3) once each, a total of 5 button presses.
# However, the fewest button presses required is 2. One way to do this is by pressing the last two buttons ((0,2) and (0,1)) once each.

# [.##.] 	[1, 2] 			[[3], [1, 3], [2], [2, 3], [0, 2], [0, 1]] 					[3, 5, 4, 7]
getMask([1, 2], [[3], [1, 3], [2], [2, 3], [0, 2], [0, 1]])
print(5^3)


# [...#.] 	[3] 	[[0, 2, 3, 4], [2, 3], [0, 4], [0, 1, 2], [1, 2, 3, 4]] 	[7, 5, 12, 7, 2]
# One way to achieve this is by pressing the last three buttons ((0,4), (0,1,2), and (1,2,3,4)) once each.
getMask([3], [[0, 2, 3, 4], [2, 3], [0, 4], [0, 1, 2], [1, 2, 3, 4]])
print(30^7^17)

# [.###.#] 	[1, 2, 3, 5] 	[[0, 1, 2, 3, 4], [0, 3, 4], [0, 1, 2, 4, 5], [1, 2]] 		[10, 11, 11, 5, 10, 5]
# The fewest presses required to correctly configure it is 2; one way to do this is by pressing buttons (0,3,4) and (0,1,2,4,5) once each.
getMask([1, 2, 3, 5], [[0, 1, 2, 3, 4], [0, 3, 4], [0, 1, 2, 4, 5], [1, 2]])
print(25^55)


print("----")

arr = [1,2,3,4,5,6]

def find_least(array, value):
	print(list(itertools.combinations(range(6), 1)))
	print(list(itertools.combinations(range(6), 2)))
	print(list(itertools.combinations(range(6), 3)))

find_least(arr, 3)