"use strict";
const fiboC = require("./build/Release/fibo");
const fiboN = require("./fibo");

function callme(cb, reps, maxFib, label){
  let start = new Date();
  for (let i = 0; i<reps; i++){
      cb(maxFib);
  }
  let end = new Date(),
    total = end - start;
  return(`${label} took ${total}`);
}

let reps = 10000,
  maxFib = 1500;

var c = callme(fiboC.fibo, reps, maxFib, "C++");
var n = callme(fiboN, reps, maxFib, "node");
console.log(c);
console.log(n);
