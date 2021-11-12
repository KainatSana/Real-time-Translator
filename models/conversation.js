const Joi=require('joi');
const jwt=require('jsonwebtoken');
const status=require('./status');
const mongoose = require('mongoose');

const conversationSchema=new mongoose.Schema({
 senderId:objectId,
 recieverId:objectId,
status:
{
    statusId:objectId,
    required:true
}
},
{timestamps:true}
);
const Conversation= mongoose.model('Conversation',conversationSchema);
function validateConversation(conversation) {
    const schema = {
      convoId: Joi.objectId().required(),
      senderId:Joi.objectId().required(),
      recieverId:Joi.objectId().required(),
      statusId:Joi.objectId().required()
    }
    return Joi.validate(conversation, schema);
  }

  exports.Conversation=Conversation;
  exports.validate=validateConversation;