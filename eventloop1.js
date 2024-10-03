const fs = require("fs");
const a = 100;
setImmediate(()=>{console.log("SetImmediate Function Executed!")});
fs.readFile("./readme.txt","utf8",()=>{
    console.log("Read File");
})
setTimeout(()=>{
    console.log("SetTimeout");
},0)

function printA(){
    console.log("a="+a);
}
console.log("End of the file");

/*
a=100
End of the file
setTimeout
SetImmediate Function Executed
Read File
*/