const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require('mongoose')
const developersRouter = require('./routes/developer')
mongoose.connect("mongodb+srv://luwam:Izzy183@izzy.eo9je.mongodb.net/developers?retryWrites=true&w=majority",
(err)=>{
      if(err){
            console.log(`couldn't connect to db`);
      }else{
            console.log('connected to db')
      }
})


app.use(express.json())
app.use(cors())
app.use('/developers',developersRouter)//........



app.use((err,req,res,next)=>{
      if(err){
            console.log(err, "error in server.js ")
            res.send({success:false,msg:"error in server"})
      }
})

app.listen(3000,console.log('listening on port 3000...'))


