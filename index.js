const express = require('express');
const cors = require('cors');

const bodyParser = require("body-parser")


const app = express();
app.use(cors());

app.use(bodyParser.json());

const users = ['asad','jaber','susmota','sabed','sohana']

app.get('/',(req,res)=>{

    const fruit = {
        product : 'ada',
        price : 220
    }
    res.send(fruit)
})

app.get('/fruit/banana',(req,res) =>{
    res.send({fruit:'banana',quantity:1000,price:10000})
})

app.get("/user/:id",(req,res)=>{
   const Id = req.params.id;
   const name = users[Id]
   res.send({Id,name})
})

//post
app.post('/addUser',(req,res)=>{
    const user = req.body
    user.id = 55
    res.send(user)
})
app.listen(3000,()=> console.log("Listening to port 4200"));
