const express= require('express');
const { savePages, getPage, updatePageById, deletePageById } = require('../controller/page.controller');
const router=express.Router();

router.route('/').post(savePages).get(getPage);
router.put('/editPage/:id', updatePageById);
router.delete('/:id', deletePageById);
// router.route('/:page').get(getPageByRoute);

module.exports = router;