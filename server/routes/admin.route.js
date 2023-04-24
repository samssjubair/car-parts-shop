const express= require('express')
const { saveAdminController } = require('../controller/admin.controller');
const router=express();

// console.log('admin route')
router.post('/', saveAdminController);

module.exports = router;