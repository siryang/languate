require "socket"
 
webserver = TCPServer.new('localhost', 880)
while (session = webserver.accept)
  session.write(Time.now)
  session.print("Hello World!")
  session.close
end
puts "h"