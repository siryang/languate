=begin
	
=end

(1..10).each {|x| print x}
print "\n"

[1..10, 1, 2].each {|x| puts x.size}
print "\n"

def show(array)
	for i in array do
		yield i
	end
end

show(["some words", "2", 3]) {|x| puts x}

