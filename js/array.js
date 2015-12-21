p = [1,2,3,4]
p["mc"] = "Jordan"

console.log(p)

console.log(p.filter( function(x, index, array) { return index == 3;});
// filter (callback(), thisArg), thisArg is "this" in callback.

