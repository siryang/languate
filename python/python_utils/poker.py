
# start
# king on the table 


class Card:
	def __init__(self, num, col):
		self.m_num = num
		self.m_color = col

class Score:
	def __init(self):
		self.m_cluster = int()

class Player:
	def __init__(self):
		self.m_cards = list()
		pass

	def getCard(card):
		self.m_cards.append(card)


def radioOnTable():
	pass


class Cluster:
	flush = 0
	four = 1
	calabash = 2
	samecolor = 3
	sequence = 4
	twopair = 5
	pair = 6
	high = 7

class Color:
	red = 0
	blue = 1
	white = 2
	black = 3

cards = [Card(1,Color.red)
	, Card(13, Color.red)
	, Card(12, Color.red)
	, Card(11, Color.red)
	, Card(10, Color.red)]

cluster = Cluster.high

samecolor = True
color = cards[0].m_color
for card in cards[1:]:
	if color != card.m_color:
		samecolor = False
		break
if samecolor:
	cluster = Cluster.samecolor

def isSucession(cards):
	num = cards[0].m_num
	for i in range(1, len(cards)):
		if cards[i].m_num != num + i:
			return False
	return True

cards.sort(key=lambda x: x.m_num)
start = 0
if cards[0].m_num == 1 and cards[1].m_num == 10:
	start = 1

if isSucession(cards[start:]):
	if cluster == Cluster.samecolor:
		cluster = Cluster.flush
	else:
		cluster = Cluster.sequence

print cluster


# king finally

