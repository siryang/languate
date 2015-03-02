from PIL import Image

def dither():
	im = Image.open("80224021.png")

	im = im.convert("P")
	out = im.convert("P", dither=Image.FLOYDSTEINBERG
		, palette=Image.ADAPTIVE, colors=16)

	im.save("2.png")
	out.save("1.png")

def getdata():
	im = Image.open("in.tga")
	size = 256, 256
	im.thumbnail(size, Image.ANTIALIAS)
	im.save("out.jpg", quality=20)
	im.getdata()
	write2Bin("out.bin", bytes(list(im.getdata())))


def write2Bin(fname, bin):
	fp = open(fname, "wb")
	fp.write(bin)
	fp.close()


getdata()