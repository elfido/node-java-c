const express = require("express"),
    app = express();

const cround = require("./build/Release/round");
const validators = require("./validators");

cround.setFactor(5);
validators.init(5);

function round(start, end){
    return validators.roundTimes(start, end);
}

function roundc(start, end){
    return cround.round(start, end);
}

function native(start, end){
    return validators.roundTimes2(start, end);
}

app.get("/dated", (req, res)=>{
    const start = req.query.start,
        end = req.query.end;
    res.send(round(start, end));
});

app.get("/native", (req, res)=>{
    const start = req.query.start,
        end = req.query.end;
    res.send(native(start, end));
});

app.get("/c", (req, res)=>{
    const start = req.query.start,
        end = req.query.end;
    res.send(roundc(start, end));
});

const start = 1501455004701,
    minutes5 = 1000 * 60 * 5,
    end = start + minutes5;

console.log(start, end);

const MAX = 100;
function runner(fn, label){
    let s = new Date().getTime();
    for(let i=0; i<MAX; i++){
        for(let j=0; j<MAX; j++){
            const _start = new Date().getTime(),
                _end = new Date().getTime();
            for(let k=0; k<MAX; k++){
                fn(_start, _end);
            }
        }
    }
    let e = new Date().getTime() - s;
    console.log(`${label} took=${e} ms`);
}

runner(roundc, "C Bindings");
runner(native, "Native test");
runner(round, "Regular test");

console.log( round(start, end) );
console.log( native(start, end) );
console.log( roundc(start, end) );

app.listen(3010, ()=>{
    console.log("app_started=3010");
});