const express= require('express');
const { getAllEntries, saveEntry, updateEntryById } = require('../controller/entry.controller');
const router=express.Router();

router.route('/').get(getAllEntries).post(saveEntry);
router.put('/:id', updateEntryById);

module.exports = router;