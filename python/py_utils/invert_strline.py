# -*- coding: utf-8 -*-

def invertDoc(lines):
	'''
		将一串文本，按照行序的逆序输出
	'''
	temp = lines.split("\n")
	temp.reverse()
	temp = "\n".join(temp)
	return temp


print invertDoc('''
			1.0f, 
			1.2f,
			1.6f,
			2.6f,
			1.5f,
			3.0f,
			1.0f,
			2.0f,
			0.5f,
			0.8f,
			0.5f,
			1.0f,
			0.5f,
			0.8f,
			0.8f
	''')

print "Hello"

