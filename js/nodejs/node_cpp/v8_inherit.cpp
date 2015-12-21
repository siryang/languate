#include "v8_inherit.h"

using namespace std;

Persistent<Function> Person::sConstructor;

const V8FunctionFormat Person::mInterfaces[] = {
    {"getName", v8_getName},
};

Persistent<v8::Function> Student::sConstructor;

const V8FunctionFormat Student::mInterfaces[] = {
    {"getGrade", v8_getGrade},
};