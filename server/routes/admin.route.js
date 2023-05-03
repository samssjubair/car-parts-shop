const express= require('express')
const { saveAdminController,getAllAdminsController, loginController,updateAdminController } = require('../controller/admin.controller');
const { deleteAdminController } = require('../controller/admin.controller');
const router=express();

// console.log('admin route')
router.post('/', saveAdminController);
router.get('/',getAllAdminsController);
router.put('/editAdmin/:id', updateAdminController)
router.delete('/deleteAdmin/:id', deleteAdminController);
router.post('/login/',loginController);

module.exports = router;