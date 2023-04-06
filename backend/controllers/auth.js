const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users=require('../models/auth')


exports.signUp=async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        const hashedPassword =await bcrypt.hash(password,12);
        const user=await Users.create({name,email,password:hashedPassword});
        const token=jwt.sign({email:user.email,id:user._id},"test",{
            expiresIn:"1h"
        });
        
        res.status(200).json({
            success: true,
            token:token,
            user:user
        })
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

exports.logIn=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const existingUser=await Users.findOne({email})
        if(!existingUser){
            return res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        
        const isPasswordMatch=await bcrypt.compare(password,existingUser.password);
        if(!isPasswordMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid Password"
            })
        }
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},"test",{
            expiresIn:"1h"
        });
        res.status(200).json({
            success: true,
            token:token,
            user:existingUser
        })
    }
    catch(err){
        console.log(err.message);
    }
}