//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { get } from "http";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
const __dirname = dirname(fileURLToPath(import.meta.url));
var iscorrectPwd =false;
const isValid = (req, res, next) => {
    const pwd = req.body["password"];
    if (pwd==="ILoveProgramming") {
        iscorrectPwd = true;
    }
    next();
}

app.use(isValid)

app.get("/",(req,res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res) => {
    if(iscorrectPwd){
        res.sendFile(__dirname +"/public/secret.html")
    }
    else {
        res.sendFile(__dirname +"/public/index.html")
    }
})

app.listen(port,() => {
    console.log("Server running on 3000")
})




