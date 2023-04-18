const express= require('express')
const app=express();
const cors=require('cors')
const mongoose = require('mongoose');
const entryRouter=  require('./routes/entries.route');

app.use(express.json());
app.use(cors());

// schema design

app.use('/api/v1/entries',entryRouter);


module.exports =app;