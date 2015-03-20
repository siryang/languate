

addUs :: Int -> Int -> Int
addUs x y = x + y

showNum :: (Integral a) => a -> String
showNum 7 = "seven"
showNum 8 = "eight"
showNum 9 = "ni" ++ "ne"
--showNum n = "value:" ++ (show n)

factorial :: (Integral a) => a -> a  
factorial 0 = 1
factorial n = n * factorial (n - 1)

numericList = [ n | n <- [1..], odd n, n `mod` 3 == 0]
-- odd antonym even


main = do
	print (show (6 / 4)) -- how change result type of "6/4" to int, like c/c++
	print (take 10 numericList)
	print (showNum 8)
	print "hello world"		

