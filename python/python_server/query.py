import urllib

h = urllib.urlopen("http://127.0.0.1")

value = h.read()
print value
print h.getcode()

print type(h.getcode())

h.close()

print "done"
