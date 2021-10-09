const express=require("express")
const app=express();
const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.get("/",(req,res)=>{
    return res.send("hello");
})
app.get("/setcookie",(req,res)=>{
    res.cookie("cookie name","cookie value",{
        maxAge:5000,
        
    });
    res.send("cookie set");
})
app.get("/getcookies",(req,res)=>{
    res.send(req.cookies);
})
app.listen(3000);