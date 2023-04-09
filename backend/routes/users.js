const express=require('express');
const router=express.Router();
const {logIn,signUp, getAllUsers,updateProfile}=require('../controllers/auth')

router.route('/signup').post(signUp);
router.route('/login').post(logIn);
router.route('/getallusers').get(getAllUsers);
router.route('/user/update/:id').put(updateProfile)

module.exports=router;
