const express=requrie("express")
const app=express();
app.get("/",(req,res)=>{
    return res.json({})
})