// const config=require('config');
const Joi=require('joi');
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose');
const DEFAULT_USER_PICTURE="/img/user.png";
const userSchema=new mongoose.Schema({
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
    password:
    {
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    phoneNumber:
    {
      type:String,
      required:true
    },
    dateOfBirth:Date,
    age:Number,
    picture:  { type: String, default:  DEFAULT_USER_PICTURE},
    isAdmin:Boolean
});
const User= mongoose.model('User',userSchema);
userSchema.method.generateAuthToken=function()
{
    const token=jwt.sign({_id: this._id,isAdmin:this.isAdmin},config.get('privatekey'));
    return token;
}
userSchema.pre('save', function(next) {
  var user = this;

  // ensure user picture is set
  if(!user.picture){
      user.picture = DEFAULT_USER_PICTURE;
      next();
  }});
function validateUser(user)
{
    const schema=Joi.object({
        name: Joi.string().min(5).max(25).required(),
        email:Joi.string().min(10).max(100).email().required(),
        password:Joi.string().min(5).max(255).required(),
        phoneNumber:Joi.string().pattern(new RegExp('([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$')).required(),
        dateOfBirth: Joi.date().max('2015-1-1z').iso()
        ,age: Joi.number().integer()
     })
    return schema.validate(user);
}

exports.User = User; 
exports.validate = validateUser;