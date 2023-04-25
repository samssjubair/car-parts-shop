const express= require('express')
const { saveAdminController,getAllAdminsController } = require('../controller/admin.controller');
const router=express();

// console.log('admin route')
router.post('/', saveAdminController);
router.get('/',getAllAdminsController);

module.exports = router;