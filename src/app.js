const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config();
const port = process.env.PORT||5000;
const hbs = require("hbs");
const connectDb = require("./config/dbConnect.js");
connectDb();

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.get(express.json)
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views" , template_path);
hbs.registerPartials(partial_path)
app.get('/',(req,res) =>{
    res.render("index");
});

app.get('/stories',(req,res) =>{
    res.render("stories");
});

app.get('/contacts',(req,res) =>{
    res.render("contacts");
});

app.listen(port,()=>{
    console.log(`App is listening at port no. ${port}`);
});