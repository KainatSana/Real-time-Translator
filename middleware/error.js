const winston=require('winston');

module.exports=function(err,req,res,next)
{
  winston.error({message: err.message, level: err.level, stack: err.stack, meta: err});
  res.status(500).send('Internal server error!');
}