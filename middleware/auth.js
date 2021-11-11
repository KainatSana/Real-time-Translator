const config=require('config');
const jwt=require('jsonwebtoken');

module.exports=function(req,res,next)
{
 const token=req.header('x-login-token');
 if(!token)return res.status(401).send('Access Denied!. No token provided');

 try
 {
  const decoded=jwt.verify(token,config.get('privatekey'));
  req.user=decoded;
  next();
 }
 catch(ex)
 {
  res.status(400).send('Invalid Token!');
 }
}