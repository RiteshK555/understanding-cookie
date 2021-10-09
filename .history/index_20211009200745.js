const express=require("express")
const app=express();
const cookieParser=requie("cookie-parser");
app.use(cookieParser());
app.get("/",(req,res)=>{
    return res.json({message:"hello messsage"});
})
app.listen(3000);