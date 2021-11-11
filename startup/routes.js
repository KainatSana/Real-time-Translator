const express = require('express');
//routes
const users=require('../routes/users');
const error=require('../middleware/error');
const login=require('../routes/auth');


//const upload=require('../middleware/upload');


module.exports=function(app)
{
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));
    app.use('/api/users',users);
    app.use('/api/login',login);
    app.use(error);
}