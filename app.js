'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
module.exports = app; 

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', require('./route/index'));

app.get('/', (req, res) => {
    res.redirect('/puppies')
})

app.listen(3000); 