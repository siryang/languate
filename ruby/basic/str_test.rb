
def getStrInfo(str)
	puts str.encoding
	puts str.force_encoding 'utf-8'

	str.chars.each do |i|
		printf(i)
	end
	puts "\n"
		
	str.bytes.each do |i|
		printf("%x", i) 
	end
	puts "\n"

	str.codepoints.each do |i|
	 	printf("%x", i.to_i)
	end
	puts "\n"
end

# str = "\uFF11\uFF12\uFF13"
str = "０１２３"
str += "4"
getStrInfo(str)

puts "=========="

m = "12,34,,5".split(",")
p m.inspect

s4 = "This " , "is" , " not a string!", 10 
print("#{print (s4)}" , s4, "\n")
print('#{print (s4)}' , s4, "\n")
print('#{print (s4)}' << s4.to_s << "\n")

puts s4
puts s4.to_s


