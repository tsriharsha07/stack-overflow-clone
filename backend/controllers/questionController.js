const Questions=require('../models/questions')
const mongoose=require('mongoose')


exports.askQuestion=async(req,res)=>{
    const postQuestionData=req.body;
    const postQuestion=new Questions({...postQuestionData,userId:req.userId})
    try {
        await postQuestion.save();
        res.status(200).json({
            message:'Question posted successfully',
            success:true,
            question:postQuestion
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
} 

exports.getQuestions=async(req,res)=>{
   
    try{
        const questions = await Questions.find();
        res.status(200).json({
            success:true,
            questions
        })
    }
    catch(error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.removeQuestion = async (req,res)=>{
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({msg:'Invalid id'});
    }
    try{
        const questions=await Questions.findByIdAndRemove(id);
        res.status(200).json({
            success:true,
            message:"Question deleted successfully"
        })
    }
    catch(error) {
        res.status(500).json({
            message:error.message
        })
    }
}