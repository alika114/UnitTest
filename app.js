const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/welcome',(req,res) => {
    res.json({
        text : "Hello World"
    });
});

 app.post('/test',(req,res) => {
     console.log(JSON.stringify(req.body));
     res.json({
         title : req.body.title
     });
});

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`running in the port : ${port}`);
});

module.exports = app;