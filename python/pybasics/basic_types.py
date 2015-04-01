
class Point:
	def __init__(self, _x = 0, _y = 0):
		self.x = _x
		self.y = _y

	def __str__(self):
		return "(%d, %d)" % (self.x, self.y)

	def __repr__(self):
		return "Point(%d, %d)" % (self.x, self.y)


class Rect:
	def __init__(self, _l = 0, _t = 0, _r = 0, _b = 0):
		self.left = _l
		self.top = _t
		self.right = _r
		self.bottom = _b

if __name__ == "__main__":
    print "this is the main function"

