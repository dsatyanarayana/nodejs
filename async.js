const fs = require("fs");
const https = require("https");


var a = 123434;
var b = 32432432;

https.get("https://dummyjson.com/products?limit=10",(res)=>{
    console.log("API response fetched successfully!");
})

fs.readFile("./readme.txt","utf8",(res)=>{
    console.log("File fetched successfully!");
})

setTimeout(()=>{
    console.log("SetTimeout executed succesffully!");
},5000)

function multiply(a,b){
    const result = a*b;
    return result;
}

const c = multiply(a,b);
console.log("Multiplication result is "+c);