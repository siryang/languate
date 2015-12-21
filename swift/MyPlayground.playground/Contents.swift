//: Playground - noun: a place where people can play

import UIKit


// let is constant var
// var is normal var
var str = "Hello, playground"
var a = 1

let m = str + String(a)


// dict
var dict = ["m": 3, "n": 4, 1:"str", 1024:1000, 900:10]
dict["m"] = 8
dict[1] = "null"

var dict2 = [:]

// array
var array = [1,4,5,6]
var array2 = ["1", 2]
var array3 = []

if a == 1 {
    a = 10
} else {
    a = 5
}

// enum
for v in array {
    a = a + v
}
print(a)

let dynamicArray = 0..<4 // 0..<4 return a range, not an array.
print(dynamicArray)

for i in 0..<4 {
    print(i)
}

for var i = 0; i < 4; i++ {
    print(i)
}
// 支持switch condition1, condition2: 同时不用增加break
// for..in.., for(;;)、while和repeat-while


// 问号的含义, var
var test: Int?
print(test)

// 变量声明时增加?或者!代表此变量是Optional的，即可以为nil。普通变量不允许设置为nil。
// ? 代表未赋值时，会赋值为nil
// ! 代表变量可以赋值为nil，但是在使用此var.xxx的地方都会被替换为var!.xxx

// Optional变量使用时可以增加?或者!，示例为var?.xxx
// ? 代表需要判断是否为nil，如果不为nil则调用.xxx
// ! 代表不需要判断是否为nil，且一定不为nil。此时若为nil会报错。
// ?? 表示当为nil时，用一个默认值代替。
var optionalName: String?
var optionalName2: String!

optionalName = "John Appleseed"
optionalName2 = "new value"
print(optionalName2)
optionalName2 = nil
if (optionalName2 == nil) {
    print("is nil")
}

let testName2 = optionalName2 ?? "Hello"

var greeting = "Hello!"
// let name = optionalName 返回值是什么?
if let name = optionalName {
    greeting = "Hello, \(optionalName)"
} else {
    greeting = "Bye, \(optionalName)"
}
// if let name = optionalName 当optionalName为nil时返回false



// 函数
func mergeWord(name: String, num: Int, mon: Int) -> String {
    return name + String(num) + " month:" + String(mon);
}

// 必须给非第一个参数加变量名冒号吗？
print(mergeWord("year:", num: 2015, mon: 06))

// 变长参数必须写在最后一个，必须是同种类型。
// 需要传不同类型参数时，需要变通，可以用Any当做参数类型。
func varParam(numbers: Int...) -> Int{
    var sum = 0
    for i in numbers {
        sum += i
    }
    return sum
}

varParam(1,2,3,4)
varParam(8,2,30,4)

// 闭包
var closer = 1;
var mappedArray: Array<Int>!;
// 一个匿名函数，参数是i，返回值是i*3
mappedArray = array.map({i in i * 3})
mappedArray
// 一个匿名函数，使用 {声明 in 实现} 形式
mappedArray = array.map({
    (number: Int) -> Int in
        closer += number
        return number * number
})
closer

// 更简短的方式，可以用$n($0/$1/$2)代表第n个参数，且闭包是唯一参数时，可以忽略括号
mappedArray = array.map {$0 * 3}
mappedArray






