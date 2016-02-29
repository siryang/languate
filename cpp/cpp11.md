

# Feature of C++11

#### `std::nothrow`
``` cpp
// new的一种安全写法, 当new失败时返回nullptr, 而不是抛出异常。
auto prt = new(std::nothrow) ClassA();
if (ptr == nullptr) {
    do_something();
}
```

#### `std::bind`

#### `std::function`



#### `default`和`delete`
关于`默认函数`。
当用户定义了构造函数时，便不会自动生成`默认构造函数`。
c++允许此时使用`default`关键字告诉编译器继续生成`默认构造函数`。
同时允许使用`delete`关键字告知编译器不要生成`默认构造函数`。
``` cpp
class X {
    X() = default; // 需要自动生成默认构造函数。
    X(int i) {}
    X(uint32 i) = delete;
    X& operator = (const X&) = delete; // 禁用默认拷贝赋值函数。
    void *operator new[](size_t) = delete;
};
```

> 另外，C++会默认生成的函数有哪些？




