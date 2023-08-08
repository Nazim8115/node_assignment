const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json);
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname +'/index.html');
})

app.post("/submit",(req,res)=>{
    const data  = req.body;
    res.json(data);
   
})
app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`)
})
