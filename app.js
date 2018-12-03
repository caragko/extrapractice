'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
module.exports = app;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', require('./route/index'));

app.listen(3000);
