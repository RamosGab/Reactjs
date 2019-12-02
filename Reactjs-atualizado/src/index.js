const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();

/**
 * Database Setup
 */

mongoose.connect('mongodb+srv://gabriel2:senha@cluster0-jyyro.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))

app.use(require('./routes'));

app.listen(3000);