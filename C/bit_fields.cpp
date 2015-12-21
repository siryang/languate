#include <stdio.h>

#pragma pack(push)
#pragma pack(1)

typedef struct {
    unsigned u : 24;
}Foo;

typedef struct {
    unsigned x : 12;
    unsigned y : 12;
}Bar;

#pragma pack(pop)

int main() {
    printf("sizeof(Foo) = %u\n", (unsigned)sizeof(Foo));
    
    Foo a = { 123 }, b = { 321 };
    Foo c = { a.u + b.u };
    printf("c = %u\n", c.u);
    
    Foo d = { 0xFFFFFF};
    Foo e = { 0x1000000 }; // warning: large integer implicitly truncated to unsigned type [-Woverflow]
    printf("d = %u\n", d.u);
    printf("e = %u\n", e.u);
    
    printf("sizeof(Bar) = %u\n", (unsigned)sizeof(Bar));
    Bar z = { 10, 20 };
    printf("z.x + z.y = %d\n", z.x + z.y);
}
