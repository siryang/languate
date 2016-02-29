#import <Foundation/Foundation.h>

@interface MyClass:NSObject
{
    NSInteger a;
    NSInteger b;
}

@property(nonatomic, readonly) NSInteger b;

- (void) printA;
- (void) method: (int)num1 arg2:(NSString*)strPtr;
@end

@implementation MyClass

@synthesize b; // 合并两个声明。

// return type should be: MyClass* / instancetype / id
- (MyClass*) init {
    return self;
}

- (void) printA {
    NSLog(@"a of MyClass is %ld\n", a);
}

- (void) method: (int)num1 arg2:(NSString*)strPtr {
    NSLog(@"MyClass::method, arg1:%d, arg2:%@", num1, strPtr);
}

@end

BOOL m; // YES/NO

void normalTest() {
    NSLog(@"hello world");
    for (size_t i = 0; i < 3; i++) {
        NSLog(@"%lu\r", i);
    }
    NSLog(@"sizeof(double): %lu\n", sizeof(double));
    NSLog(@"sizeof(long double): %lu\n", sizeof(long double));
}

void classTest() {
    MyClass* sample = [[MyClass alloc] init];
    [sample method: 100 arg2:@"string ptr"];
    [sample printA];
    NSLog(@"b : %ld\n", sample.b);
}

int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    normalTest();
    classTest();

    [pool drain];
    return 0;
}
   
