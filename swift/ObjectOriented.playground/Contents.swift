//: Playground - noun: a place where people can play

import UIKit

enum ShapeType: Int {
    case Begin = 10
    case Fat, Thin
    case High, Short

    func enumFunction() -> String {
        return String(self.rawValue)
    }

    func getDescription() -> String {
        switch self {
        case .Thin:
            return "thin"
        case .High:
            return "high"
        default:
            return "fat or short"
        }
    }
}

let m = ShapeType.High
m.enumFunction()
ShapeType.Short.rawValue
ShapeType(rawValue: 10)
var test: ShapeType? = ShapeType(rawValue: 5)

// swift的enum是可以赋附加值的，分原始值(同c枚举)和实例值
enum Person {
    case Teacher(String)
    case Student(String)
    case Other(String, String) // first name, last name
}

let personA = Person.Other("路人", "甲")
let personB = Person.Teacher("老师A")


class HelloOriented {
    var mName: String
    var mShape: ShapeType {
        willSet {
            print("before change mShape")
        }
        didSet {
            print("after change mShape");
        }
    }

    var age: Int {
        get {
            return self.age
        }
        set(age) {
            self.age = age
        }
    }

    // 默认参数
    // 构造函数
    init(name: String) {
        self.mName = name
        self.mShape = ShapeType.Thin
    }

    // 析构函数
    deinit {
        print("deinit")
    }

    func show() {
        print("i am \(mName), my shape is \(mShape)")
    }
}

var oriented = HelloOriented(name: "Nancy");
oriented.show()
// 不能这样赋值，但不清楚如何赋值
//oriented.age = 10
//oriented.age

// 继承
class ChildOriented : HelloOriented {
    // override重写基类方法
    override init(name: String) {
        super.init(name: name)
        mShape = ShapeType.Fat
    }

    override func show() {
        print("i am \(mName), my shape is \(mShape)")
    }
}

var child = ChildOriented(name: "Joncy")
child.show()

// 协议 应该是类似Interface类
protocol ExampleProtocol {
    var description: String { get }
    mutating func adjust()
}
// mutating关键字: 结构体中声明的函数如果要修改成员变量，则需要加mutating。类中不用
// extension关键字: 用来给现有类型增加函数
extension Int: ExampleProtocol {
    var description: String {
        return "value is \(self)"
    }
    func toWeekday() -> Int {
        return self % 7 + 1
    }
    func absValue() -> Int {
        // 支持问号表达式不
        // return self > 0? self: -self
        if (self < 0) {
            return -self
        } else {
            return self
        }
    }
    mutating func adjust() {

    }
}

1.toWeekday()
(-10).absValue()



