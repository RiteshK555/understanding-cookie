const express=requrie("express")
const app=express();
const cookieParser=requrie("cookie-parser"_
app.get("/",(req,res)=>{
    return res.json({message:"hello messsage"});
})
app.listen(3000);