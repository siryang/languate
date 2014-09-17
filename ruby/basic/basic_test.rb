#require "math"

class User
	attr_accessor :name, :passwd

    def initialize(&block)
        instance_eval(&block)
    end

	def show
		puts "name:#{@name}, passwd:#{@passwd}"
	end

	def User.my_attr(*names)
	    names.each{|n|
            class_eval %{
                def show_#{n}()
                    puts @#{n}
                end
            }
        }
    end

    my_attr :name, :passwd
end


def main()
	user = User.new{
		@name = "sir"
		@passwd = "yang"	
	}

	user.show
	user.show_name
	user.show_passwd
end


main






