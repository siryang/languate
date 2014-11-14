import os, sys
sys.path.insert(0, "..")

import pickle

from pybasics import *

'''amazing pickle module
	serialize objects
'''

pointList = [Point(x, 2*x) for x in range(1,1000)]

pickle.dump(pointList, open("pickle.dump", "w"))


m = pickle.load(open("pickle.dump"))
print type(m)
print m 