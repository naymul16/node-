const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("thank you very much")
})
app.listen(4200,()=> console.log("Listening to port 4200"));
