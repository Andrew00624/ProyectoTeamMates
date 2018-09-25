const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: "dqdpblijd",
  api_key: "345919248677416",
  api_secret: "kNECB_blYX7urterKJvAflP5hMs"
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: 'Profile Pictures', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png','jpeg','gif','pdf'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

//const uploadCloud = multer({ storage: storage }).single('file');
const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;