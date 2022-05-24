const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routers = require("./routers/routers");



//enviornment veriabel
require("dotenv/config");



//middle ware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Routers
app.use("/post", routers);




//server start
app.listen(3000, function () {
  console.log("server is running on port 3000");
});



// connection to databse
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to database")
);
