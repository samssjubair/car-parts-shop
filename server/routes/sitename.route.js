const express= require('express');
const { getAppName, updateAppName } = require('../controller/sitename.controller');
const router=express.Router();

router.route('/').patch(updateAppName).get(getAppName);

module.exports = router;