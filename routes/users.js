const auth=require('../middleware/auth');
const config=require('config');
const jwt=require('jsonwebtoken');
const {User, validate} = require('../models/user');
const _=require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const router = express.Router();

router.get('/me',auth,async(req,res)=>{
const user=await User.findById(req.user._id).select('-password');
res.send(user);
})

router.post('/', async (req, res) => {

   const { error } = validate(req.body); 
   if (error) return res.status(400).send(error.details[0].message);

   let user= await User.findOne({email: req.body.email});
   if (user) return res.status(400).send('User already registered.');

   user=new User( _.pick(req.body,['name','email','password','phoneNumber','dateOfBirth','age']));
   let salt=await bcrypt.genSalt(10);
   user.password=await bcrypt.hash(user.password,salt);
   await user.save();

   const token= user.generateAuthToken;
   res.header('x-login-token',token).send(_.pick(user,['_id','name','email','password','phoneNumber','dateOfBirth','age']));
});
router.get('/', async(req, res) => {
const user = await User.find().sort('name');
  res.send(user);
  });


 module.exports=router;