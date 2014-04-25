=begin
1.实例变量，类变量，全局变量，类常量
2.静态方法，Private方法
=end

class Test
	ConstantVar = 1
	@@staticVar = "--"

	#attr_accessor 仅对实例变量有效,区别于类(静态)变量
	attr_accessor :localVar

	def initialize()
		@localVar = "local var"
		@@staticVar += "|--"
	end

	def addStatic
		@@staticVar += "|--"
	end

	def self.addStatic #静态方法
		@@staticVar += "|--"
	end

	class << self
	end

	def to_s
		puts "\tlocalVar:#{@localVar}\n" +
			"\tConstantVar:#{ConstantVar}\n" +
			"\tstaticVar: #{@@staticVar}\n"
	end
end

puts Test::ConstantVar
test1 = Test.new
test2 = Test.new
test1.localVar += " hi"
Test.addStatic
test1.addStatic
puts test1.localVar
puts test1
puts "1"
