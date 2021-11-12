const Joi=require('joi');
const mongoose = require('mongoose');
const status=require('./status');

const detailSchema=new mongoose.Schema({
    duration:String,
    status:
    {
     required:true
    },
    category:{
        recieved:Boolean,
        missed:Boolean,
        rejected:Boolean
    }
},
{timestamps:true})


const Detail= mongoose.model('Detail',detailSchema);
function validateDetail(detail) {
    const schema = {
      convoId: Joi.objectId().required(),
      senderId:Joi.objectId().required(),
      recieverId:Joi.objectId().required(),
      statusId:Joi.objectId().required()
    }
    return Joi.validate(detail, schema);
  }

  exports.Detail=Detail;
  exports.validate=validateDetail;