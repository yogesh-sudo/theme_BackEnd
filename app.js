const express = require("express");
const connectToMongoose = require("./db");
const app = express();
connectToMongoose();
app.set("view engine", "ejs");
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, HEAD, PATCH, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/index',require('./routers/themes'))

app.get("/", (req, res) => {
    res.render('themes')
})
app.get("/posttheme",(req,res)=>{
  res.render("posttheme")
})
app.listen(5000, () => {
    console.log("posrt start 5000")
})