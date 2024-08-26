const crypto = require("crypto");
var a = 1234234;
var b = 23423432;


setTimeout(()=>{
    console.log("TIMEOUT EXECUTED!");
},0)

const r = crypto.pbkdf2Sync("satya123","sai",5000,60,"sha512");
console.log("First key created"+r);


crypto.pbkdf2("satya","salt",500000,10,"sha512",(err,res)=>{
    console.log("Key created "+res);
});


function multiply(a,b){
    const result = a*b;
    return result;
}

const res = multiply(a,b);
console.log("Result is "+res);


