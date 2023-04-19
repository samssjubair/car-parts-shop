const express= require('express');
const { getAllEntries, saveEntry } = require('../controller/entry.controller');
const router=express.Router();

router.route('/').get(getAllEntries).post(saveEntry);

module.exports = router;