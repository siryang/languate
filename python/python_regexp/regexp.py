
import re

input = ['100 NORTH MAIN ROAD', '100 BROAD', '100 BROAD ROAD APT. 3']

# re.sub: replace

# \b: world edge, in python \b must input ad '\\b', because \ is '\\' 
for i in input:
    print re.sub('\\bROAD', 'RD.', i)

print "----------cutline------------"

for i in input:
    print re.sub(r'\bROAD\b', 'RD.', i)

print "----------cutline------------"

# re.search: search(pattern, string)
input = ['MCM', 'MMMCCC', 'CCCLL']

# M{n,m}:
# (A|B|C):
# A?:
pattern = '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$'
for i in input:
    print re.search(pattern, i) != None

print "----------cutline------------"

# re.VERBOSE: ignore "space", "tab" and "line break" in pattern.
pattern = '''
    ^               #beginning of pattern
    M{0,3}          #comment
    (CM|CD|D?C{0,3})
    (XC|XL|L?X{0,3})
    (IX|IV|V?I{0,3})
    $
'''

for i in input:
    reResult = re.search(pattern, i, re.VERBOSE)
    print reResult != None


print "----------cutline------------"

# re.compile: pre-compile regexp pattern.