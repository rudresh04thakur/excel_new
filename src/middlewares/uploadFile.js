const multer = require('multer');

// // Set up storage for uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'src/public/uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// // Create the multer instance
// const upload = multer({ storage: storage });
const multipartUpload = multer({storage: multer.diskStorage({
  destination: function (req, file, callback) { callback(null, 'src/public/uploads/');},
  filename: function (req, file, callback) { callback(null, Date.now() + '-' + file.originalname);}})
});

module.exports = multipartUpload;