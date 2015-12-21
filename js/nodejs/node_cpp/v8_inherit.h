#pragma once

#include <node.h>
#include <node_object_wrap.h>
#include <vector>

using namespace v8;
using namespace node;
using namespace std;

#define element_of(o) (sizeof(o) / sizeof((o)[0]))


typedef void (*V8Function) (const FunctionCallbackInfo<Value>& args);

struct V8FunctionFormat {
    const char* name;
    V8Function function;
};

class Person : public node::ObjectWrap {
public:
    static void getMemberFunctionList(vector<V8FunctionFormat>& functionList) {
        functionList.insert(functionList.end(), &mInterfaces[0], &mInterfaces[0] + element_of(mInterfaces));
    }

    static void v8AddMemberFunction(Handle<FunctionTemplate> tpl, vector<V8FunctionFormat>& interfaceList) {
        size_t count = interfaceList.size();
        tpl->InstanceTemplate()->SetInternalFieldCount(count);
        for (size_t i = 0; i < count; i++) {
            NODE_SET_PROTOTYPE_METHOD(tpl, interfaceList[i].name, interfaceList[i].function);
        }
    }

    static void v8InitModule(v8::Handle<v8::Object> exports) {
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);

        // Prepare constructor template
        Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, v8_new);
        tpl->SetClassName(String::NewFromUtf8(isolate, "Person"));
        vector<V8FunctionFormat> interfaceList;
        getMemberFunctionList(interfaceList);
        v8AddMemberFunction(tpl, interfaceList);

        sConstructor.Reset(isolate, tpl->GetFunction());
        exports->Set(String::NewFromUtf8(isolate, "Person"), tpl->GetFunction());
    }

    static void v8_new(const v8::FunctionCallbackInfo<v8::Value>& args) {
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);
        if (args.IsConstructCall()) {
            Person* obj = new Person();
            obj->mName = "Person";
            obj->Wrap(args.This());
            args.GetReturnValue().Set(args.This());
        }
    }

protected:
    static void v8_getName(const v8::FunctionCallbackInfo<v8::Value>& args) {
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);
        Person* o = ObjectWrap::Unwrap<Person>(args.Holder());
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, o->mName));
    }

    static v8::Persistent<v8::Function> sConstructor;
    const char* mName;
private:
    const static V8FunctionFormat mInterfaces[1];
};

class Student : public Person {
public:
    // static void v8AddMemberFunction(Handle<FunctionTemplate> tpl) {
    //     Person::v8AddMemberFunction(tpl);
    //     const V8FunctionFormat functions[] = {
    //         {"getGrade", v8_getGrade},
    //     };
    //     size_t memberFunctionNum = element_of(functions);
    //     tpl->InstanceTemplate()->SetInternalFieldCount((int)memberFunctionNum);

    //     for (size_t i = 0; i < memberFunctionNum; i++) {
    //         // Prototype
    //         NODE_SET_PROTOTYPE_METHOD(tpl, functions[i].name, functions[i].function);
    //     }
    // }

    static void getMemberFunctionList(vector<V8FunctionFormat>& functionList) {
        Person::getMemberFunctionList(functionList);
        functionList.insert(functionList.end(), &mInterfaces[0], &mInterfaces[0] + element_of(mInterfaces));
    }

    static void v8InitModule(v8::Handle<v8::Object> exports) {
        //Person::v8InitModule(exports);
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);

        // Prepare constructor template
        Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, v8_new);
        tpl->SetClassName(String::NewFromUtf8(isolate, "Student"));
        vector<V8FunctionFormat> interfaceList;
        getMemberFunctionList(interfaceList);
        v8AddMemberFunction(tpl, interfaceList);
        sConstructor.Reset(isolate, tpl->GetFunction());
        exports->Set(String::NewFromUtf8(isolate, "Student"), tpl->GetFunction());
    }

    static void v8_new(const v8::FunctionCallbackInfo<v8::Value>& args) {
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);
        if (args.IsConstructCall()) {
            Student* obj = new Student();
            obj->mName = "Student";
            obj->mGrade = "Grade 2";
            obj->Wrap(args.This());
            args.GetReturnValue().Set(args.This());
        }
    }
private:
    static void v8_getGrade(const v8::FunctionCallbackInfo<v8::Value>& args) {
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);
        Student* o = ObjectWrap::Unwrap<Student>(args.Holder());
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, o->mGrade));
    }

    const static V8FunctionFormat mInterfaces[1];
    static v8::Persistent<v8::Function> sConstructor;
    const char* mGrade;
};
