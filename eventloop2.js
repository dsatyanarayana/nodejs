const fs = require("fs");
const a = 100;

setImmediate(()=>console.log("setImmediate"));
Promise.resolve("Promise").then(console.log);
fs.readFile("readme.txt","utf8",()=>{
    console.log("read file");
})
setTimeout(()=>console.log("setTImeout"),0);
process.nextTick(()=>console.log("ProcessNextTick"));

function printA(){
    console.log("a="+a);
}
printA();
console.log("File Ended!");

/*
a=100
File Ended!
ProcessNextTick
Promise Resolved!
SetTimeout
SetImmediate
Read File
*/
