const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1- CRYPTO done");
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("2- CRYPTO done");
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("3- CRYPTO done");
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("4- CRYPTO done");
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("5- CRYPTO done");
})
