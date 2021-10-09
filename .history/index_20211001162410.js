const express=requrie("express")
const app=express();
const cookieParser=
app.get("/",(req,res)=>{
    return res.json({message:"hello messsage"});
})
app.listen(3000);