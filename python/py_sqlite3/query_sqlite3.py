import sys, sqlite3

dbfilename = "C:/Users/yangdi.MAPBAR0/Desktop/diff/base_14spring.db"

con = sqlite3.connect(dbfilename)
fp = open("query_grid.bin", "wb+")
for eachCol in con.cursor().execute("SELECT gridData FROM qvf where gridId=67430663"):
	print type(eachCol)
	fp.write(eachCol[0])

fp.close()

con.close()

