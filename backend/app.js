const express=require('express')
const app=express()
const cors=require('cors');
const users=require('./routes/users');
const dotenv=require('dotenv');

dotenv.config({path:'backend/config/config.env'})

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({ limit:"30mb",extended:true}));
app.use(cors());

app.use('/api/v1',users);



module.exports=app