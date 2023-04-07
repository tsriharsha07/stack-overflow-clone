const express=require('express');
const router=express.Router();
const { askAnswer, deleteAnswer} =require('../controllers/Answer')

router.route('/askanswer/:id').put(askAnswer)
router.route('/answer/delete/:id').put(deleteAnswer)

module.exports=router; 
