const Joi=require('joi');
const mongoose = require('mongoose');

const translationSchema=new mongoose.Schema({
    originalConvo:
    {
      audio:String,
      video:String,
      msg:String
    },
    translatedConvo:
    {
        audio:String,
        video:String,
        msg:String
    },
    languages:
    {
       english:Boolean,
       urdu:Boolean
    },
    pdf:{
     type:String
    },
    mdgId:
    {
        Types:mongoose.Types.ObjectId,
        required:true
    },
    callId:
    {
        Types:mongoose.Types.ObjectId,
        required:true
    }
  
 });