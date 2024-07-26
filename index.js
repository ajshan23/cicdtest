import express from "express";
import dotenv from "dotenv"

dotenv.config({});
const app = express();
const PORT =process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("<h1>hi</h1>")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT} `);
})