const express= require('express')
const app=express();
const cors=require('cors')
const mongoose = require('mongoose');
const entryRouter=  require('./routes/entries.route');
const pagesRouter=  require('./routes/pages.route');
const logoRouter=  require('./routes/logo.route');

app.use(express.json());
app.use(cors());

// schema design

app.get('/api/v1/logo/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'logo.png'))
    // console.log(path.join(__dirname, '../..', 'public', 'logo.png'))
    res.sendFile(__dirname + '/public/logo.png');
});

app.use('/api/v1/entries',entryRouter);
app.use('/api/v1/pages',pagesRouter);
app.use('/api/v1/logo',logoRouter);


module.exports =app;