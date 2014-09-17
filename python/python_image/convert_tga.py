import os
import argparse
from PIL import Image

args = argparse.ArgumentParser()

def tgaFilter(fname):
	return fname.endswith(".TGA") or fname.endswith(".tga")

def makeDestName(fname):
	return fname.replace(".TGA", ".jpg")

def convert(src, dest):
	global args
	print "convert %s ==> %s" % (src, dest)
	src = os.path.join(args.srcDir, src)
	dest = os.path.join(args.destDir, dest)
	#return

	im = Image.open(src)
	size = 256, 256
	im.thumbnail(size, Image.ANTIALIAS)
	im.save(dest, quality=20)

def checkDirectory():
	if not os.path.exists(args.destDir):
		os.makedirs(args.destDir)

def main():
	global args
	print args

	checkDirectory()
	
	map(lambda x: convert(x, makeDestName(x))
		, filter(lambda x: tgaFilter(x), os.listdir(args.srcDir)))


if __name__ == "__main__":
	parser = argparse.ArgumentParser(description='parser')
	parser.add_argument('--srcDir', type=str, default="./"
			, help='directory store tga file')
	parser.add_argument('--destDir', type=str, default="./123/456/"
			, help='convert to directory')

	parser.set_defaults(srcDir="./tgas")
	parser.set_defaults(destDir="./tgas-make")
	
	global args
	args = parser.parse_args()

	main()




