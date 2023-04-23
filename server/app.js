const express= require('express')
const app=express();
const cors=require('cors')
const mongoose = require('mongoose');
const entryRouter=  require('./routes/entries.route');
const pagesRouter=  require('./routes/pages.route');

app.use(express.json());
app.use(cors());

// schema design

app.use('/api/v1/entries',entryRouter);
app.use('/api/v1/pages',pagesRouter);


module.exports =app;