require "uri"
require "net/http"

# #puts routeResult
# response = nil
# Net::HTTP.start('some.www.server', 80) {|http|
#   response = http.head('/index.html')
# }
# p response['content-type']


m = Net::HTTP.get(URI('http://www.baidu.com'))
#puts "%x", m



puts Net::HTTP.get(URI("http://stackoverflow.com/questions/1979934/using-urlllib2-urlopen-fails-for-binary-data"))