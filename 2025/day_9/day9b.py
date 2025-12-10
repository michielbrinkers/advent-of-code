# https://adventofcode.com/2025/day/6
from shapely.geometry import Point, Polygon, LineString
import matplotlib.pyplot as plt

use_example = False
with open("input9.txt" if not use_example else "example9b.txt", "r") as file:
	lines = file.read().splitlines()

coords = [tuple(map(int, line.split(","))) for line in lines]
polygon = Polygon(coords)

def fits_in_polygon(p1, p2, polygon):
	# check that all corners fall within the polygon
	xmin, xmax = sorted((p1[0], p2[0]))
	ymin, ymax = sorted((p1[1], p2[1]))

	# check corner first, faster than checking the whole polygon cover
	corners = [Point(xmin, ymin), Point(xmax, ymin), Point(xmax, ymax), Point(xmin, ymax)]
	if any(not polygon.intersects(p) for p in corners):
		return False

	# see if the rect covers the polygon	
	rect = Polygon([ (xmin, ymin), (xmax, ymin), (xmax, ymax), (xmin, ymax) ])
	return polygon.covers(rect)

largest = 0
largest_box = (None, None)
for p1 in coords:
	for p2 in coords:
		# see if it's a viable candidate
		dx = abs(p1[0]-p2[0]) + 1
		dy = abs(p1[1]-p2[1]) + 1
		size = dx*dy
		
		if size > largest:
			# see if the rect fits in the polygon
			if not fits_in_polygon(p1, p2, polygon):
				continue
			largest = size
			largest_box = (p1, p2)
			print("largest:", largest)

"""
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
"""
# 1539809693