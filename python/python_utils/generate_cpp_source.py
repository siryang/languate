import os


def addMacro(fname):
	#print "processing ", fname
	fp = open(fname, "r")

	defined = False
	lines = fp.readlines()
	for line in lines:
		if line.find(r"#if defined(USE_MAPRENDER_3)") != -1:
			defined = True
			break
	fp.close();
	
	#print fname, defined

	if defined:
		return


	fp = open(fname, "w")
	start = 0

	if len(lines) != 0 and lines[0].find(r'#include "stdafx_map_render3.h"') != -1:
		print fname, "stdafx"
		fp.write(lines[0])
		start += 1

	fp.write("#if defined(MAPBAR_USE_OPENGL) || defined(MAPBAR_USE_DIRECT3D)\n");

	for line in lines[start:]:
		fp.write(line)

	if lines[-1] != "\n":
		fp.write("\n")

	fp.write("#endif//#if defined(MAPBAR_USE_OPENGL) || defined(MAPBAR_USE_DIRECT3D)\n\n");

	fp.close()


fileList = filter(lambda x: x.endswith(".cpp"), os.listdir("."))
map(lambda fname: addMacro(fname), fileList)
#addMacro("texture.cpp")
