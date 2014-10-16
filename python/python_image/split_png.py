from PIL import Image

name2height = ["label", "road", "line", "subway", "polygon", "tmcLine", "model", "roadname"]
im = Image.open("layer_type.png")
size = (64, 64)

for i in range(0, 8):
	box = (0, 20*i, 80, 20*(i+1))	
	region = im.crop(box)	
	region.thumbnail(size, Image.ANTIALIAS)
	region.save("hh/" + name2height[i] + ".png")





#im.save("2.png")
