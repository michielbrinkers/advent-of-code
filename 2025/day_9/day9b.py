# https://adventofcode.com/2025/day/6
from shapely.geometry import Point, Polygon, LineString
import matplotlib.pyplot as plt

use_example = False
with open("input9.txt" if not use_example else "example9b.txt", "r") as file:
	lines = file.read().splitlines()

coords = [tuple(map(int, line.split(","))) for line in lines]
polygon = Polygon(coords)

def fits_in_polygon(c1, c2, polygon):
	# check that all corners fall within the polygon
	corners = [
		Point(min(c1[0], c2[0]), min(c1[1], c2[1])),
		Point(max(c1[0], c2[0]), min(c1[1], c2[1])),
		Point(max(c1[0], c2[0]), max(c1[1], c2[1])),
		Point(min(c1[0], c2[0]), max(c1[1], c2[1]))
	]

	if any(not polygon.intersects(p) for p in corners):
		return False
	
	# check there are no line intersections with the polygon boundary
	lines = [
		LineString([corners[0], corners[1]]),
		LineString([corners[1], corners[2]]),
		LineString([corners[2], corners[3]]),
		LineString([corners[3], corners[0]])
	]

	for line in lines:
		intersection = line.intersection(polygon.boundary)
		if intersection.geom_type in ["MultiLineString", "GeometryCollection", "MultiPoint"]:
			if len(intersection.geoms) > 2:
				# if there are more than two geometries in the intersection we are crossing boundaries
				return False
	return True

largest = 0
largest_box = (None, None)
for c1 in coords:
	for c2 in coords:
		dx = abs(c1[0]-c2[0]) + 1
		dy = abs(c1[1]-c2[1]) + 1
		size = dx*dy
		
		if size > largest:
			if not fits_in_polygon(c1, c2, polygon):
				continue # doesn't fit so skip
			largest = size
			largest_box = (c1, c2)
			print("largest:", largest)


## Render shape for debugging
zoom = -1  # zoom window radius
corners = [
	Point(min(largest_box[0][0], largest_box[1][0]), min(largest_box[0][1], largest_box[1][1])),
	Point(max(largest_box[0][0], largest_box[1][0]), min(largest_box[0][1], largest_box[1][1])),
	Point(max(largest_box[0][0], largest_box[1][0]), max(largest_box[0][1], largest_box[1][1])),
	Point(min(largest_box[0][0], largest_box[1][0]), max(largest_box[0][1], largest_box[1][1]))
]

# # render
fig, ax = plt.subplots()

# Draw both polygons
for poly in [polygon, Polygon(corners)]:
    x, y = poly.exterior.xy
    ax.fill(x, y, alpha=0.4)

# Draw vertices of main polygon
xv, yv = polygon.exterior.xy
ax.plot(xv, yv, "k.", markersize=1)

# Highlight c248 and largest point
ax.plot(largest_box[0][0], largest_box[0][1], "ro", markersize=3)
ax.plot(largest_box[1][0], largest_box[1][1], "bo", markersize=1)

if zoom != -1:
	cx, cy = largest_box[1][0], largest_box[1][1]
	ax.set_xlim(cx - pad, cx + pad)
	ax.set_ylim(cy - pad, cy + pad)

ax.invert_yaxis()
ax.set_aspect("equal", adjustable="box")

plt.savefig("polygon.png")
plt.close()

# 1539809693