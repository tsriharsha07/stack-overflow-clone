const mongoose=require('mongoose');
const Questions=require('../models/questions');

exports.askAnswer=async(req,res)=>{
    const id=req.params.id;
    const {noOfAnswers,answerBody,userAnswered,userId}=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({msg:'Invalid id'});
    }
    updateNoOfQuestions(id, noOfAnswers);
    try {
        const updateQuestion=await Questions.findByIdAndUpdate(id,{$addToSet:{'answer':[{answerBody,userAnswered,userId}]}});
        res.status(200).json({
          success:true,
          data:updateQuestion
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
        console.log(error.message)
    }

}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
      await Questions.findByIdAndUpdate(_id, {
        $set: {  noOfAnswers },
      });
    } catch (error) {
      console.log(error);
    }
  };


  exports.deleteAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { answerId, noOfAnswers } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("Question unavailable...");
    }
    if (!mongoose.Types.ObjectId.isValid(answerId)) {
      return res.status(404).send("Answer unavailable...");
    }
    updateNoOfQuestions(_id, noOfAnswers);
    try {
      await Questions.updateOne(
        { _id },
        { $pull: { answer: { _id: answerId } } }
      );
      res.status(200).json({ message: "Successfully deleted..." });
    } catch (error) {
      res.status(405).json(error);
    }
  };
