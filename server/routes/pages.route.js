const express= require('express');
const { savePages } = require('../controller/page.controller');
const router=express.Router();

router.route('/').post(savePages);

module.exports = router;