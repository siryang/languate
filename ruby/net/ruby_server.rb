=begin
#this another sample of http server
require "socket"
 
webserver = TCPServer.new('localhost', 880)
while (session = webserver.accept)
  session.write(Time.now)
  session.print("Hello World!")
  session.close
end
puts "h"

=end

#the sample of a file web-server
require 'webrick'

trap 'INT' do server.shutdown end

#web servlet, access by ip:port/simple
class Simple < WEBrick::HTTPServlet::AbstractServlet
  def do_GET request, response
    #status, content_type, body = do_stuff_with request
    #response.body = request.to_s + "\n\n"

    response.status = 200
    response['Content-Type'] = 'text/plain'
    response.body += 'Hello, World! This is Servlet Simple!'
    response.body += 'http://127.0.0.1:9090'
  end
end

#create server
root = File.expand_path Dir::pwd
server = WEBrick::HTTPServer.new(:Port => 9090,	:DocumentRoot => Dir::pwd + "/")

#mount access point
server.mount_proc '/' do |req, res|
	res.body = 'Hello, world!'
end

server.mount '/simple', Simple

server.mount_proc '/index' do |req, res|
  res.body = 'Welcome'
end
#server.mount 'index', Index

server.start


