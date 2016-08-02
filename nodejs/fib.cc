#include <node.h>

using namespace v8;

namespace demo{
  using v8::String;

  double fib(const double x){
      if(x==1){
        return x;
      } else{
          return x * fib(x-1);
      }
  }

  void Fibo(const FunctionCallbackInfo<Value>& args){
    Isolate* isolate = args.GetIsolate();
    double num = args[0]->NumberValue();
    args.GetReturnValue().Set( fib( num ) );
  }

  void init(Local<Object> exports){
    NODE_SET_METHOD(exports, "fibo", Fibo);
  }

  NODE_MODULE(fibo, init)
}
