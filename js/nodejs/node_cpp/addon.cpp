
#include <node.h>
#include <v8.h>
#include "cpp_interface.h"
#include <iostream>

// 引入v8命名空间
using namespace v8;
using namespace std;


void callback(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    Local<Function> cb = Local<Function>::Cast(args[0]);
    const unsigned argc = 1;
    Local<Value> argv[argc] = { String::NewFromUtf8(isolate, "hello world") };
    cb->Call(isolate->GetCurrentContext()->Global(), argc, argv);
}

void sayHello(const FunctionCallbackInfo<Value>& args) {
  	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);
  	// args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
  	args.GetReturnValue().Set(String::NewFromOneByte(isolate, (uint8_t*)"world"));
}

void sayWorld(const FunctionCallbackInfo<Value>& args) {
	//Isolate* isolate = Isolate::GetCurrent();
	//HandleScope scope(isolate);
	char temp[256] = "";
	args[0]->ToString()->WriteUtf8(temp);
	cout << temp << endl;
}

void InitAll(Handle<Object> exports) {
	// 测试v8_demo.node同时export 函数sayHello和类MyObject。
	NODE_SET_METHOD(exports, "hello", sayHello);
	NODE_SET_METHOD(exports, "say", sayWorld);
    NODE_SET_METHOD(exports, "callback", callback);
  	MyObject::Init(exports);
}

NODE_MODULE(v8_demo, InitAll)
