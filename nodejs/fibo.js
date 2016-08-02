function fib(x){
  if (x===1){
    return x;
  } else{
    return x * fib(x-1);
  }
}

module.exports=fib;
