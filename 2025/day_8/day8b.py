from __future__ import annotations

# https://adventofcode.com/2025/day/6
import math
import sys

use_example = False
with open("input8.txt" if not use_example else "example8.txt", "r") as file:
	lines = file.read().splitlines()

class Coord:
	def __init__(self, idx, x, y, z):
		self.idx = idx
		self.x = x
		self.y = y
		self.z = z
		self.distances = None
		self.closest = None

		self.circuit = None
		self.connections = []

	def __repr__(self):
		return "%s: (%s,%s,%s)" % (self.idx, self.x, self.y, self.z)

	def connection_count(self):
		return len(self.connections)

	def sq_dist(self, other) -> float:
		return (self.x - other.x)**2 + (self.y - other.y)**2 + (self.z - other.z)**2

	def calculate_distances(self, coords):
		self.distances = [(coord, self.sq_dist(coord)) for coord in coords]
		self.distances.sort(key=lambda c: c[1])

	def update_closest(self):
		self.closest = next((
			(coord, distance) 
			for (coord, distance) in self.distances 
			if not coord is self # coord isn't self
				and not coord in self.connections
				# and coord.circuit == None or coord.circuit != self.circuit # filter if in same circuit
		), (None, sys.maxsize))

	def connect_to_closest(self, circuits):
		other = self.closest[0] # only one is responsible for making the connection...
		self.connections.append(other)
		other.connections.append(self)
		if self.circuit == other.circuit and not self.circuit == None:
			# do nothing if in same circuit
			# print("connected on same circuit", self, other, "circut:", self.circuit[0], "junctions:", len(self.circuit[1]))
			return self.x * other.x

		if self.circuit != None and other.circuit != None:
			# merge circuits
			if not other.circuit in circuits:
				print("Error:", self, other, self.circuit, other.circuit)
			circuits.remove(other.circuit)
			for coord in other.circuit[1]:
				coord.circuit = self.circuit;
				self.circuit[1].add(coord)
		else:
			self.circuit = other.circuit = self.circuit or other.circuit or (len(circuits) + 1, set())
			self.circuit[1].add(self)
			self.circuit[1].add(other)
			if self.circuit not in circuits:
				circuits.append(self.circuit)
		# print("connected: ", self, other, "circut:", self.circuit[0], "junctions:", len(self.circuit[1]))
		return self.x * other.x


coords = [
	Coord(i, *map(int, line.split(",")))
	for i,line in enumerate(lines)
]

for coord in coords:
	coord.calculate_distances(coords)

circuits = []

i = 0
while True:
	# todo filter coords for already connected
	for coord in coords:
		coord.update_closest()
	coords.sort(key=lambda c: c.closest[1])
	dx = coords[0].connect_to_closest(circuits)

	circuits.sort(key=lambda c: len(c[1]), reverse=True)
	i += 1
	print(i, len(circuits), len(circuits[0][1]) / len(coords)) 
	# print([	(id, len(junctions), [coord.idx for coord in junctions]) for id, junctions in circuits])
	if len(circuits) == 1 and len(circuits[0][1]) == len(coords):
		print("all connected", dx)
		break

# 78894156