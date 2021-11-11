require('express-async-errors');
const winston=require('winston');
require('winston-mongodb');


module.exports=function()
{
    winston.exceptions.handle(
        new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
        new winston.transports.Console({colorize:true,prettyPrint:true})
      );
      process.on('unhandledRejection',(ex)=>{
        throw ex;
      })
      winston.add(new winston.transports.File({ filename: 'logfile.log' }));
      winston.add(new winston.transports.MongoDB({ db:'mongodb://localhost/backend',
      options: { useUnifiedTopology: true },
       metaKey: 'meta',
       level:'error'}));
 
}