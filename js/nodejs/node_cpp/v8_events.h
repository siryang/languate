#pragma once


/**
js : yunmap.events.addListener(instance, eventName, listener);
c++: V8Event::emit(eventName, instance[, arg1][, arg2][,...]);
*/
class V8Event : public {

public:
    void static addListener(const v8::FunctionCallbackInfo<v8::Value>& args); // call js function
    void static emit(const char* eventName, v8<Handle> v8Objecct); // call js function.
};



