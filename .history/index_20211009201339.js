const express=require("express")
const app=express();
const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.get("/",(req,res)=>{
    return res.send("hello");
})
app.get("/setcookie",(req,res)=>{
    res.
})
app.listen(3000);