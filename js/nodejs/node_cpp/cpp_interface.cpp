// myobject.cc
#include "cpp_interface.h"
#include <iostream>

using namespace std;
using namespace v8;

Persistent<Function> MyObject::constructor;

MyObject::MyObject(const Point* pos){
    mPos.x = pos->x;
    mPos.y = pos->y;
    mChild = NULL;
}

MyObject::~MyObject() {
}

void MyObject::Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();

  // Prepare constructor template
  Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
  tpl->SetClassName(String::NewFromUtf8(isolate, "MyObject"));
  tpl->InstanceTemplate()->SetInternalFieldCount(1);

  // Prototype
  NODE_SET_PROTOTYPE_METHOD(tpl, "getPosition", getPosition);
  NODE_SET_PROTOTYPE_METHOD(tpl, "getWidth", v8_getWidth);
  NODE_SET_PROTOTYPE_METHOD(tpl, "getHeight", v8_getHeight);
  NODE_SET_PROTOTYPE_METHOD(tpl, "getColor", v8_getColor);

  NODE_SET_PROTOTYPE_METHOD(tpl, "getChild", getChild);

  constructor.Reset(isolate, tpl->GetFunction());
  exports->Set(String::NewFromUtf8(isolate, "MyObject"),
               tpl->GetFunction());
}


Handle<v8::Value> getObjectMember(Isolate* isolate, Handle<Object> object, const char* name){
  return object->Get(String::NewFromUtf8(isolate, name));
}

void MyObject::New(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);
  if (args.IsConstructCall()) {
    // Invoked as constructor: `new MyObject(...)`
    Point pos;
    // pos.x = args[0]->IsUndefined() ? 0 : args[0]->Int32Value();
    // pos.y = args[1]->IsUndefined() ? 0 : args[1]->Int32Value();
    Local<Object> v8Pos = args[0]->ToObject();
    pos.x = getObjectMember(isolate, v8Pos, "x")->Uint32Value();
    pos.y = getObjectMember(isolate, v8Pos, "y")->Uint32Value();

    MyObject* obj = new MyObject(&pos);
    obj->mWidth = getObjectMember(isolate, v8Pos, "width")->Uint32Value();
    obj->mHeight = getObjectMember(isolate, v8Pos, "height")->Uint32Value();
    obj->mColor = getObjectMember(isolate, v8Pos, "color")->Uint32Value();
    obj->Wrap(args.This());
    args.GetReturnValue().Set(args.This());
  } else {
    // Invoked as plain function `MyObject(...)`, turn into construct call.
    const int argc = 1;
    Local<Value> argv[argc] = { args[0] };
    Local<Function> cons = Local<Function>::New(isolate, constructor);
    args.GetReturnValue().Set(cons->NewInstance(argc, argv));
  }
}

void MyObject::getPosition(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  MyObject* myObj = ObjectWrap::Unwrap<MyObject>(args.Holder());

  Local<Object> obj = Object::New(isolate);
  obj->Set(String::NewFromUtf8(isolate, "x"), Int32::New(isolate, myObj->mPos.x));
  obj->Set(String::NewFromUtf8(isolate, "y"), Int32::New(isolate, myObj->mPos.y));

  args.GetReturnValue().Set(obj);
}

void MyObject::setPosition(const v8::FunctionCallbackInfo<v8::Value>& args){
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    MyObject* o = ObjectWrap::Unwrap<MyObject>(args.Holder());
    Local<Object> v8Pos = args[0]->ToObject();
    o->mPos.x = getObjectMember(isolate, v8Pos, "x")->Uint32Value();
    o->mPos.y = getObjectMember(isolate, v8Pos, "y")->Uint32Value();
}

void MyObject::CloudAppWeakReferenceCallback(Persistent<Value> object, void * param) {
    if (MyObject* cloudapp = static_cast<MyObject*>(param)) {
        delete cloudapp;
    }
}

void MyObject::getChild(const v8::FunctionCallbackInfo<v8::Value>& args) {
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    MyObject* o = ObjectWrap::Unwrap<MyObject>(args.Holder());
    if (o->mChild == NULL) {
      Point p;
      p.x = 11; p.y = 22;
      o->mChild = o;
    }
    cout << "new child success" << endl;
    cout << "wrap success" << endl;
    //args.GetReturnValue().Set(o->mChild->handle(isolate));
    args.GetReturnValue().Set(Null(isolate));
}
