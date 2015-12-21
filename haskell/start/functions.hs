
zipWith3' :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
zipWith3' _ [] _ _ = []
zipWith3' _ _ [] _ = []
zipWith3' _ _ _ [] = []
zipWith3' f (a:ax) (b:bx) (c:cx) = f a b c: zipWith3' f ax bx cx

main = do
    zipWith3' (\a b c -> a * b + c) [1,2,3] [4, 5, 6] [7,8,9]
-- output [11, 18, 27]