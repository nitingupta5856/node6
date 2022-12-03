const express = require("express");
const routes = express.Router();
//  /admin/add-product - for get request
routes.get('/add-product',(req,res,next)=>{
    // console.log("in another middleware");
    // res.send("app product page")
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
   
    
    })
    //  /admin/add-product - for post request
    routes.post('/add-product',(req,res,next)=>{
        console.log(req.body);
        
        res.redirect('/shop')
       
        })
module.exports=routes;