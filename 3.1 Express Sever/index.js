import express from 'express';
 const app = express()
 const port = 3000;

 app.get("/",(req,res) => {
    res.send("<h1>Hello Gouse! How do you do ?</h1>");
 })
 app.get('/about',(req,res) => {
    res.send("This is about Page");
 })

 app.get('/contact',(req,res) => {
    res.send("This is contact Page");
 })

 app.listen(port,() => {
    console.log(`The Server is listning at ${port}`);
 })