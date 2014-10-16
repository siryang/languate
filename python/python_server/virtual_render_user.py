import urllib

hsot = "http://img.mapbar.com"
logFname = "1.txt"

def pressureTest(logFname):
	fp = open(logFname)
	for i in fp.readlines():
		requestUrl(url):(host + i.split(" ")[1])
	fp.close()

def requestUrl(url):
	urlHandle = urllib.urlopen(url) 
	urlHandle.close()	

pressureTest(logFname)


