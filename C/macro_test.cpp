
#include <stdio.h>

#define LINK(A, B) \
void (A##B)(){\
	printf("Hi "#B"\n");\
	printf("%s", #A);\
}


LINK(say, Hello);


class A{
public:
	static void show(){
		printf("show of A\n");
	}
};

#define CALL(Class, Function) (Class::Function())

int main(){
	A::show();
	CALL(A, show);

	sayHello();

	return 0;
}