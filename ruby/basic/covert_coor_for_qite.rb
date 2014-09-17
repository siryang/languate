str = "
+		[0]	{x=11640201 y=3992314 }	Point
+		[1]	{x=11640014 y=3992308 }	Point
+		[2]	{x=11640014 y=3992264 }	Point
+		[3]	{x=11640145 y=3992268 }	Point
+		[4]	{x=11640174 y=3991667 }	Point
+		[5]	{x=11640231 y=3991667 }	Point


+		[0]	{x=678 y=3571 }	Point
+		[1]	{x=0 y=3549 }	Point
+		[2]	{x=0 y=3389 }	Point
+		[3]	{x=474 y=3404 }	Point
+		[4]	{x=580 y=1216 }	Point
+		[5]	{x=787 y=1216 }	Point



"


#regex=/.+x={\d*} y={\d*}*\n/
regex=/^\+.+x=([\d]+) y=([\d]+).+Point\n/
rstX = Array.new
str.scan(regex).each {|m| rstX.push([m[0], m[1]])}
#rstX.each{|x| puts "(#{x[0]}, #{x[1]})"}

halfLen = rstX.size/2
for i in (0...rstX.size)
	#puts rstX[i]
	if i < rstX.size/2
		puts "#{rstX[i][0]}, #{rstX[i][1]}, #{rstX[i+halfLen][0]}, #{rstX[i+halfLen][1]}"
	else
		puts "#{rstX[i][0]}, #{rstX[i][1]}"
		#puts "dots[#{i-6}] = {x:#{rstX[i][0]}, y:#{rstX[i][1]}};"
	end
end



