
=begin

algorithm for heap_sort

=end


class Heap < Array
	def parent(index)
		parent = (index-1) / 2
		if parent < 0
			return nil
		else
			return parent
		end
	end

	def sortOneItem(index)
		parentIdx = parent(i)
		value = at(i)
		parent = at(parentIdx)
		if (value > parent)
		end

	end

	def sort
		puts "hi"
		(-count+1..0).each{ |i|
			puts self[i]			
		}
	end
end

heap = Heap.new
heap.push([1,3,8])
heap.sort