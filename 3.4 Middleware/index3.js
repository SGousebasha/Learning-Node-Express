import express from "express";

const app = express();
const port = 3000;
const logMethod = (req,res,next) => {
  console.log("Request Method is : ",req.method);
  console.log("Request URL is : ",req.url);
  next();
}

app.use(logMethod);


app.get("/", (req, res) => {
  res.send("Hello");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
