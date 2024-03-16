const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads')
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname.split('.')[0];
        let fileExtension = file.originalname.split('.')[1];
        cb(null, Date.now()+ '-'  + fileName + '.' + fileExtension)
    }
})
const upload = multer({ storage: storage })

module.exports = upload;