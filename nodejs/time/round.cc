#include <node.h>
#include <cmath>

using namespace v8;

namespace demo{
  using v8::String;
  Persistent<Number> persist;
  const unsigned long int factor = 5 * 60000;

  double roundTo(const unsigned long int x){
      return (x / factor) * factor;
  }

  void round(const FunctionCallbackInfo<Value>& args){
    Isolate* isolate = args.GetIsolate();
    if (args.Length()<1){
      isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")
      ));
    }
    const unsigned long start = args[0]->NumberValue();
    const double x = (start / factor) * factor;
    args.GetReturnValue().Set( x );
  }

  void setFactor(const FunctionCallbackInfo<Value>& args){
    Isolate* isolate = args.GetIsolate();
    int f = args[0]->Int32Value() * 60000;
    Handle<Number> factor = Int32::New(isolate, f);
    persist.Reset(isolate, factor);
    printf("Factor: %f\n", factor->NumberValue());
  }

  void init(Local<Object> exports){
    NODE_SET_METHOD(exports, "round", round);
    NODE_SET_METHOD(exports, "setFactor", setFactor);
  }

  NODE_MODULE(round, init)
}