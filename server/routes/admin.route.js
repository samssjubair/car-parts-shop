const express= require('express')
const { saveAdminController,getAllAdminsController, loginController } = require('../controller/admin.controller');
const router=express();

// console.log('admin route')
router.post('/', saveAdminController);
router.get('/',getAllAdminsController);
router.post('/login/',loginController);

module.exports = router;