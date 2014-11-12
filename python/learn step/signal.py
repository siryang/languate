
def tryInterrupt():
	try:
		while True:
			pass
	except KeyboardInterrupt:
		print "get exception", KeyboardInterrupt
	except:
		print "get other exception"
		raise


import site
print site.getusersitepackages()

a = 2 + 2j * 3j + 2j
print a 

print a * complex(1, 1)

