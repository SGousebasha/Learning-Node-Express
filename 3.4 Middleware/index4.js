import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
var bandName;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({enxtend:true}));

const dataToSend =(req,res,next) =>{
  console.log("request received");
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(dataToSend)
// getting request
app.get('/',(req,res) => {
  
  res.sendFile(__dirname + "/public/index.html");
})
// seding response

app.post("/submit",(req,res) => {
  console.log('response sent');
  res.send(`<h1>Band name is</h1><h2>${bandName}</h2>`)
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
