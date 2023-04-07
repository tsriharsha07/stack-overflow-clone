const express=require('express');
const router=express.Router();

const {askQuestion,getQuestions,removeQuestion}=require('../controllers/questionController');


router.route('/askquestion').post(askQuestion); 
router.route('/getquestions').get(getQuestions);
router.route('/question/delete/:id').delete(removeQuestion);

module.exports=router; 
