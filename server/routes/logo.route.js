const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public'); // Save the uploaded file to the public directory
  },
  filename: function (req, file, cb) {
    cb(null, 'logo.png'); // Rename the uploaded file to "logo.png"
  }
});

const upload = multer({ storage: storage });

// Route to handle the logo upload
router.post('/', upload.single('logo'), (req, res) => {
    console.log('hi')
  res.json({ message: 'Logo uploaded successfully' });
});

// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'public', 'logo.png'))
//     // console.log(path.join(__dirname, '../..', 'public', 'logo.png'))
//     res.sendFile(__dirname + '../../public/logo.png');
// });


module.exports = router;
