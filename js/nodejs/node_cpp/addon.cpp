#include <iostream>
#include <node.h>
#include <v8.h>
#include "cpp_interface.h"
#include "v8_inherit.h"
#include <pthread.h>
#include <unistd.h>
#include "uv.h"

// 引入v8命名空间
using namespace v8;
using namespace std;

struct Callback {
  Persistent<Function> fn;
};

vector<Callback*> callbacks;

void stopDefaultLooper(const FunctionCallbackInfo<Value>& args) {
  cout << "try stop default loop" << endl;
  uv_stop(uv_default_loop());
  uv_loop_close(uv_default_loop());
}

void sleep(const FunctionCallbackInfo<Value>& args) {
  usleep(args[0]->Uint32Value() * 1000);
}

void setCallback(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    Local<Function> cb = Local<Function>::Cast(args[0]);
    Callback* callback = new Callback();
    callback->fn.Reset(isolate, cb);
    callbacks.push_back(callback);
}

void invokeCallback(const FunctionCallbackInfo<Value>& args) {
    printf("invokeCallback");
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    const unsigned argc = 1;
    Local<Value> argv[argc] = {String::NewFromUtf8(isolate, "hello world") };
    for (Callback* callback: callbacks) {
      Local<Function> cb = Local<Function>::New(isolate, callback->fn);
      cb->Call(isolate->GetCurrentContext()->Global(), argc, argv);
    }
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
	cout << temp << "thread:" << (intptr_t)pthread_self() << endl;
}

void showPoints(const FunctionCallbackInfo<Value>& args) {
  Handle<Array> array = Handle<Array>::Cast(args[0]);
  cout << "array length:" << array->Length() << endl;
  for (int i = 0; i < (int)array->Length(); i++) {
    Local<Object> point = array->Get(i)->ToObject();
    double lon = point->Get(v8::String::NewFromUtf8(v8::Isolate::GetCurrent(), "lon"))->NumberValue();
    double lat = point->Get(v8::String::NewFromUtf8(v8::Isolate::GetCurrent(), "lat"))->NumberValue();
    cout << "index:" << i << " value:" << lon << "," << lat << endl;
  }
  // Get(0);
  // GetInternalField(0);
}

void returnArray(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);
  Local<Array> array = Array::New(isolate, 5);
  for (int i = 0; i < 5; i++) {
    Local<Object> item = Object::New(isolate);
    item->Set(String::NewFromUtf8(isolate, "lon"), Number::New(isolate, i*2));
    array->Set(i, item);
  }
  args.GetReturnValue().Set(array);
}

void InitAll(Handle<Object> exports)  {
	// 测试v8_demo.node同时export 函数sayHello和类MyObject。
	NODE_SET_METHOD(exports, "hello", sayHello);
	NODE_SET_METHOD(exports, "say", sayWorld);
  NODE_SET_METHOD(exports, "showPoints", showPoints);
  NODE_SET_METHOD(exports, "sleep", sleep);
  NODE_SET_METHOD(exports, "stop", stopDefaultLooper);
  NODE_SET_METHOD(exports, "returnArray", returnArray);
  NODE_SET_METHOD(exports, "setCallback", setCallback);
  NODE_SET_METHOD(exports, "invokeCallback", invokeCallback);

  MyObject::Init(exports);
  Person::v8InitModule(exports);
  Student::v8InitModule(exports);
}

NODE_MODULE(v8_demo, InitAll)
