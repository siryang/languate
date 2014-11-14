

def testImportDynamic():
	packet = "packet.module1"

	try:
		packet = __import__(packet)
	except:
		print "import failed"


	packet.module1.module_init()


from packet.module1 import *
def importTest():
	import packet.module2
	packet.module2.module_init()
	module_init()

def importTest2():
	import packet
	packet.module1.module_init()
	packet.module2.module_init()


importTest2()
#importTest()