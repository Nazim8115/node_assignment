const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.sendFile(__dirname +'/index.html');
})

app.post("/submit",(req,res)=>{
    const inputData = req.body.input_data;
    console.log(inputData);
    res.json(JSON.parse(inputData));
})

app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`)
})
