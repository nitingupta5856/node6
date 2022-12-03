const express =require("express");
const routes =express.Router();
routes.get('/',(req,res,next)=>{
    // console.log("in another middleware");
    res.send("<h1>express js</h1>")
   
    })
module.exports=routes;