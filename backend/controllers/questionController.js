const Questions = require('../models/questions')
const mongoose = require('mongoose')


exports.askQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions({ ...postQuestionData, userId: req.userId })
    try {
        await postQuestion.save();
        res.status(200).json({
            message: 'Question posted successfully',
            success: true,
            question: postQuestion
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Questions.find();
        res.status(200).json({
            success: true,
            questions
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.removeQuestion = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'Invalid id' });
    }
    try {
        const questions = await Questions.findByIdAndRemove(id);
        res.status(200).json({
            success: true,
            message: "Question deleted successfully"
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("question unavailable...");
    }

    try {
        const question = await Questions.findById(_id);
        const upIndex = question.upVote.findIndex((id) => id === String(userId));
        const downIndex = question.downVote.findIndex(
            (id) => id === String(userId)
        );
        if (value === "upvote") {
            if (downIndex !== -1) {
                question.downVote = question.downVote.filter(
                    (id) => id !== String(userId)
                );
            }
            if (upIndex === -1) {
                question.upVote.push(userId);
            } else {
                question.upVote = question.upVote.filter((id) => id !== String(userId));
            }
        } else if (value === "downvote") {
            if (upIndex !== -1) {
                question.upVote = question.upVote.filter((id) => id !== String(userId));
            }
            if (downIndex === -1) {
                question.downVote.push(userId);
            } else {
                question.downVote = question.downVote.filter(
                    (id) => id !== String(userId)
                ); 
            }
        }
        await Questions.findByIdAndUpdate(_id, question);
        res.status(200).json({
            message: "voted successfully...",
            success: true,
            question:question
        });
    } catch (error) {
        res.status(404).json({ message: "id not found" });
    }
}