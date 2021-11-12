const Joi=require('joi');
const mongoose = require('mongoose');


const statusSchema=new mongoose.Schema({

    status:{
    Number,
    max:2,
    min:0,
    required:true
}},
{timestamps:true});

const Status= mongoose.model('Status',statusSchema);

function validateStatus(status) {
    const schema = {
      statusId:Joi.objectId().required(),
      status:Joi.Number.max(2).min(0)
    }
    return Joi.validate(status, schema);
  }

  exports.Status=Status;
  exports.validate=validateStatus;
