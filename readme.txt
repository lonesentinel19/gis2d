gis2d v0.1

What is gis2d?
==============
gis2d is a basic and poorly written JavaScript program. It can turn a large image into an interactable and scalable
map, but only partially, because it was written fast. 

Setting up gis2d
================
If you cannot tell already, I don't recommend using this program. But if you really want to, check out the config:
	mapLoc: location of map, directory
	scale: 1 pixel equals 'scale'(cm), default is .8382 so one pixel at zoom 1 equals .8382cm
	maxZoom: maximum zoom allowed
	minZoom: minimum zoom allowed
	height: height of image in pixels
	width: widh of image in pixels
	locations: locations of various objects and such. These objects must be specified using a FOUR-POINT
		SQUARE format. Imagine a rectangle. Now imagine that the first number is the left side and the second
		number is the right side. The third number is the top and the fourth is the bottom side. 

Future Features(TM)
===================
There may not be any useful updates, but overlays would be a nice feature to have. Along with measurement of area and
such.

Why the terrible coloring?
==========================
At such an early stage in development, it is too early to worry about matching colors and adding custom fonts and such. 