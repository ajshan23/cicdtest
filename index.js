import express from "express";
import dotenv from "dotenv"

dotenv.config({});
const app = express();
const PORT =process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("<h1>hi</h1>")
})
app.get("/ajmal",(req,res)=>{
    res.send("Hi from ajmal")
})
app.get("/health",(req,res)=>{
    res.send("<div>health is okay</div>")
})
app.get("/das",(req,res)=>{{
    res.send("<h1>hi from krishna das</h1>")
}})
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT} `);
})