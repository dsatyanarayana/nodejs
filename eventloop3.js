const fs = require("fs");
setImmediate(()=>console.log("setImmediate1"));
setTimeout(()=>console.log("setTimeout1"),0);
Promise.resolve("Promise").then(console.log);
fs.readFile("readme.txt","utf8",()=>{
    setTimeout(()=>console.log("setTimeout2"),0);
    process.nextTick(()=>console.log("processNextTick2"));
    setImmediate(()=>console.log("setImmediate2"));
    console.log("File read");
})
process.nextTick(()=>console.log("processNextTick1"));
console.log("End of the file");
/*
End of the file
processNextTick1
Promise
setTimeout1
setImmediate1
File read
processNextTick2
setImmediate2
setTimeout2
*/