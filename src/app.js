const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config();
const port = process.env.PORT||5000;
const hbs = require("hbs");
const connectDb = require("./config/dbConnect.js");
const sendQueries = require("./models/queries.js")
connectDb();

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.use(express.json())
app.use(express.urlencoded({extended:false}));
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
app.get('/about',(req,res) =>{
    res.render("about");
});
app.get('/services',(req,res) =>{
    res.render("services");
});
app.get('/skills',(req,res) =>{
    res.render("skills");
});

app.post('/contacts', async(req,res) =>{
    try{
        const getMessage = new sendQueries({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            query: req.body.query,
            message: req.body.message
        })
        const gotMessage = await getMessage.save();
        // alert("Message Sent Successfully");
        res.status(201).render("contacts");
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

app.listen(port,()=>{
    console.log(`App is listening at port no. ${port}`);
});