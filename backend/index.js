const app = require('./app');
const connectToDatabase=require('./config/database');
const dotenv = require('dotenv')

connectToDatabase();

dotenv.config({path:'backend/config/config.env'})

app.get('/',(req,res)=>{
    res.send('This is a stack overflow clone api');
})  

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT}`);
})