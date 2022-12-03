

const express =require("express");

const bodyParser=require("body-parser");
const app = express();
const admin =require("./routes/admin");
const shop =require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));




app.use('/admin',admin);
app.use('/shop',shop);

// app.use('/',(req,res,next)=>{
//     console.log("this always run");
//     next();
    
//     })

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
    
    })

 

       


app.listen(4000);
