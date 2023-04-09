const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users=require('../models/auth')
const mongoose=require('mongoose')

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

exports.getAllUsers=async(req,res)=>{
    try {
        const users = await Users.find();
        res.status(200).json({
            success: true,
            users:users
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateProfile=async(req,res)=>{
    const {id:_id}=req.params;
    const {name,about,tags}=req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("question unavailable...");
      }
    
      try {
        const updatedProfile = await Users.findByIdAndUpdate(
          _id,
          { $set: { name: name, about: about, tags: tags } },
          { new: true }
        );
        res.status(200).json({
            succes:true,
            updatedProfile:updatedProfile});
      } catch (error) {
        res.status(405).json({ message: error.message });
      }
}