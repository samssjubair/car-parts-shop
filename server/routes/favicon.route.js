const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public'); 
  },
  filename: function (req, file, cb) {
    cb(null, 'favicon.ico'); 
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('favicon'), (req, res) => {
    console.log('hi')
  res.json({ message: 'Favicon uploaded successfully' });
});



module.exports = router;
