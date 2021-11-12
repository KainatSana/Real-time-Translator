const Joi=require('joi');
const mongoose = require('mongoose');


const requestSchema=new mongoose.Schema({
   permission:{
       accept:Boolean,
       ignore:Boolean,
       block:Boolean
   }
})


const Request= mongoose.model('Request',requestSchema);
function validaterequest(request) {
    const schema = {
      
    }
    return Joi.validate(request, schema)
  }

  exports.Request=Request;
  exports.validate=validateRequest;