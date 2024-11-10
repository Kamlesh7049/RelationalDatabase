const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const cors=require('cors');
const mongoose = require('mongoose');
const empRoute=require("./routes/employeeRoute")
require("dotenv").config();

mongoose.connect(process.env.DBCONNECTION).then((res)=>{
    console.log("Connected to MongoDB");
})
const port = process.env.PORT || 3000;
app.use(cors());
//Body-parser middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

app.use("/employee",empRoute);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}!!!`);
})


