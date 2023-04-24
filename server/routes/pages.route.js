const express= require('express');
const { savePages, getPage } = require('../controller/page.controller');
const router=express.Router();

router.route('/').post(savePages).get(getPage);
// router.route('/:page').get(getPageByRoute);

module.exports = router;