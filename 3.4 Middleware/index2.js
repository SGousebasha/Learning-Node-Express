import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
// using morgan middle ware
app.use(morgan("dev"))
app.get("/", (req, res) => {
  res.send("Hello Gouse");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
