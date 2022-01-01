const Joi=require('joi');
const path=require('path');
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose');
const DEFAULT_USER_PICTURE="/img/user.png";
const contactSchema=new mongoose.Schema({

    name:
    {
      type:String,
      required:true,
      minlength:5,
      maxlength:15,
      lowercase:true,
      trim:true
    },
    email:
    {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:5,
        maxlength:100
    },
    phoneNumber:
    {
      type:String,
      required:true
    },
    profilePic:  { type: String, default:  DEFAULT_USER_PICTURE}
});

const Contact= mongoose.model('Contact',contactSchema);

function validateContact(contact)
{
    const schema=Joi.object({
        name: Joi.string().min(5).max(25).required(),
        email:Joi.string().min(10).max(100).email().required(),
        phoneNumber:Joi.string().pattern(new RegExp('([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$')).required()
     })
    return schema.validate(contact);
}

exports.Contact = Contact; 
exports.validate = validateContact;
