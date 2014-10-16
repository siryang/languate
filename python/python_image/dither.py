from PIL import Image

im = Image.open("80224021.png")

im = im.convert("P")
out = im.convert("P", dither=Image.FLOYDSTEINBERG
	, palette=Image.ADAPTIVE, colors=16)

im.save("2.png")
out.save("1.png")
