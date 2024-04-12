/**
 * middleware upload image to folder
 * created by : Risyandi
 * 2021
 */
const multer = require('multer');
const path = require('path');

const UploadImages = function () {
    return this;
};

UploadImages.storage = (req, res) => {
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/images/');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    return storage;
}

// accept images only with format bellow
UploadImages.allowedImage = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        return cb({
            "name": "MulterError",
            "message": "Format file not allowed",
            "code": "FORMAT_FILE_NOT_ALLOW",
            "field": "image",
        }, false);
    } else {
        return cb(null, true);
    }
}

module.exports = UploadImages;