const Joi=require('joi');
const mongoose = require('mongoose');

const systemSchema=new mongoose.Schema({
   OTP:{
       type:String,
       required:true
   },
   verificationLink:
   {
    type:String,
    required:true
   }
 })

const System= mongoose.model('System',detailSystem);
function validateSystem(sysytem) {
    const schema = {
      OTP:Joi.string().required,
      verificationLink:Joi.string().required
    }
    return Joi.validate(system, schema)
  }

  exports.System=System;
  exports.validate=validateSystem;