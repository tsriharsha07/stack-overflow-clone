const express=require('express')
const app=express()
const cors=require('cors');
const users=require('./routes/users');
const questions=require('./routes/questions');
const dotenv=require('dotenv');
const answers=require('./routes/answer');


dotenv.config({path:'backend/config/config.env'})

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({ limit:"30mb",extended:true}));
app.use(cors());

app.use('/api/v1',users);
app.use('/api/v1',questions)
app.use('/api/v1',answers);



module.exports=app