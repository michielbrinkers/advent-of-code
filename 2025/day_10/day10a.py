# https://adventofcode.com/2025/day/6
import itertools

use_example = False
with open("input10.txt" if not use_example else "example10.txt", "r") as file:
	lines = file.read().splitlines()

class Machine:
	def __init__(self, instructions):
		self.instructions = instructions
		self.lights = list(instructions[0][1:-1])

		self.lights_mask = sum([1<<i for i,ch in enumerate(self.lights) if ch == "#"])

		self.buttons = [list(map(int, button[1:-1].split(","))) for button in instructions[1:-1]]
		self.button_masks = [(i,n) for (i,n) in enumerate([sum([1<<idx for idx in combo]) for combo in self.buttons])]

		self.joltage = list(map(int,instructions[-1][1:-1].split(",")))

	def __repr__(self):
		return "".join(self.lights) #",".join(self.instructions)

	def toggle_light(self,idx):
		self.lights[idx] = "." if self.lights[idx] == "#" else "#" 

	def press_button(self,idx):
		before = self.__repr__()
		for b in self.buttons[idx]:
			self.toggle_light(b)
		# print(idx, self.buttons[idx], before, ">", self)

	def find_least_button_presses(self):
		masks = [ m for i,m in self.button_masks]
		max_depth = 10
		n = len(self.button_masks)
		for depth in range(1,max_depth+1):
			for combo in itertools.combinations(range(n), depth):
				xor_val = 0
				for idx in combo:
					xor_val ^= masks[idx]
				if xor_val == self.lights_mask:
					return (depth, combo)
		return (None, None)

machines = [Machine(line.split(" ")) for line in lines]

presses = [machine.find_least_button_presses() for machine in machines]
counts = [count for count, combos in presses]
print(sum(counts), max(counts))

# for i,(count, combos) in enumerate(presses):
# 	for combo in combos:
# 		machines[i].press_button(combo)
# 	print(machines[i])