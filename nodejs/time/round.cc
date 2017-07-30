#include <node.h>

using namespace v8;

namespace demo{
  using v8::String;

  // roundTo(value, factor){
	// 	let x = Math.round(value / factor) * factor;
	// 	if (x>=60){
	// 		x = 0;
	// 	}
	// 	return x;
	// },

  double round(const double value, const int factor){
    return value;
  }

  double roundTo(const double x, const int factor){
      double result = 0;
      result = x / 1000; // Seconds 128 / 60 = Math.floor(2.x) * 60
      result = result / 60;
      result = result * 60000;
      return result;
  }

  void round(const FunctionCallbackInfo<Value>& args){
    Isolate* isolate = args.GetIsolate();
    if (args.Length()<3){
      isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")
      ));
    }
    if (!args[0]->IsNumber() || !args[1]->IsNumber() || !args[2]->IsNumber()){
      isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "All arguments must be numbers")
      ));
    }
    double start = args[0]->NumberValue();
    double end = args[1]->NumberValue();
    double seed = args[2]->NumberValue();
    double curatedStart = roundTo(start, seed);
    double curatedEnd = roundTo(end, seed);
    Local<Array> dates = Array::New(isolate);
    Local<Number> s = Number::New(isolate, curatedStart);
    Local<Number> e = Number::New(isolate, curatedEnd);
    dates->Set(0, s );
    dates->Set(1, e );
    args.GetReturnValue().Set( dates );
  }

  void init(Local<Object> exports){
    NODE_SET_METHOD(exports, "round", round);
  }

  NODE_MODULE(round, init)
}