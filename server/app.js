const express= require('express')
const app=express();
const cors=require('cors')
const mongoose = require('mongoose');
const entryRouter=  require('./routes/entries.route');
const pagesRouter=  require('./routes/pages.route');
const logoRouter=  require('./routes/logo.route');
const faviconRouter=  require('./routes/favicon.route');
const adminRouter=  require('./routes/admin.route');
const sitenameRouter=  require('./routes/sitename.route');
const metaDescription= require('./routes/metaDescription.route');

app.use(express.json());
app.use(cors());

// schema design

app.get('/api/v1/logo/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'logo.png'))
    // console.log(path.join(__dirname, '../..', 'public', 'logo.png'))
    res.sendFile(__dirname + '/public/logo.png');
});

app.get('/api/v1/favicon/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'logo.png'))
    // console.log(path.join(__dirname, '../..', 'public', 'logo.png'))
    res.sendFile(__dirname + '/public/favicon.ico');
});



app.use('/api/v1/entries',entryRouter);
app.use('/api/v1/pages',pagesRouter);
app.use('/api/v1/logo',logoRouter);
app.use('/api/v1/favicon',faviconRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/sitename',sitenameRouter);
app.use('/api/v1/metadescription',metaDescription);

module.exports =app;