# -*- coding: utf-8 -*-

a = ["don't\n"
	, r"don't\n"
	, u"\u0020don't\n"
	, ur"don't\n"]

for b in a:
	print b

c = u"中文".encode("utf-8")
print c
