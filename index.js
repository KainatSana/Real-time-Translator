const express = require('express');
const app = express();
const path=require('path');
require('express-async-errors');
const winston=require('winston');
require('winston-mongodb');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/logging')();
require('./startup/config')();


const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
