#ifndef MYOBJECT_H
#define MYOBJECT_H

#include <node.h>
#include <node_object_wrap.h>

using namespace v8;

struct Point{
	int x, y;
};

class MyObject : public node::ObjectWrap {
 public:
    static void Init(v8::Handle<v8::Object> exports);

 private:
    explicit MyObject(const Point* pos);
    ~MyObject();

    static void New(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void getPosition(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void setPosition(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void changeValue(const v8::FunctionCallbackInfo<v8::Value>& args);

    static v8::Persistent<v8::Function> constructor;


#define v8FunctionGenerator(Class, V8ReturnType, Function) \
static void v8_##Function(const v8::FunctionCallbackInfo<v8::Value>& args)\
{\
	Isolate* isolate = Isolate::GetCurrent();\
    HandleScope scope(isolate);\
	args.GetReturnValue().Set(V8ReturnType::New(isolate\
		, ObjectWrap::Unwrap<Class>(args.Holder())->Function()));\
}

	v8FunctionGenerator(MyObject, Int32, getWidth)

	v8FunctionGenerator(MyObject, Int32, getHeight)

	v8FunctionGenerator(MyObject, Int32, getColor)

	int getWidth(){
		return mWidth;
	}

	int getHeight(){
		return mHeight;
	}

	int getColor(){
		return mColor;
	}

    Point mPos;
    int mWidth;
    int mHeight;
    int mColor;
};

#endif