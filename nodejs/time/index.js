"use strict";
const cround = require("./build/Release/round");
const validators = require("./validators");

validators.init(5);

function round(start, end){
    return validators.roundTimes(start, end);
}

function roundc(start, end){
    return cround.round(start, end, 5);
}

// function callme(cb, reps, maxFib, label){
//   let start = new Date();
//   for (let i = 0; i<reps; i++){
//       cb(maxFib);
//   }
//   let end = new Date(),
//     total = end - start;
//   return(`${label} took ${total}`);
// }

// let reps = 10000,
//   maxFib = 1500;

// var c = callme(fiboC.fibo, reps, maxFib, "C++");
// var n = callme(fiboN, reps, maxFib, "node");
// console.log(c);
// console.log(n);
const start = new Date().getTime(),
    minutes5 = 1000 * 60 * 5,
    end = start + minutes5;

console.log(start, end);
console.log( round(start, end) );
console.log( roundc(start, end) );
