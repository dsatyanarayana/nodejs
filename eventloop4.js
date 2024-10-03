const fs = require("fs");
setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("Timer"),0);
Promise.resolve("Promise").then(console.log);
fs.readFile("readme.txt","utf8",()=>{
    console.log("Read File");
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("Inner Next Tick"));
    console.log("NextTick");
})
console.log("End of the file");