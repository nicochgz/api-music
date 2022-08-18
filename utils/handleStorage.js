const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop(); //TODO ["name", "png"]
        //shift() agarra el primer valor de un array
        //pop() agarra el último valor de un array
        const filename = `file-${Date.now()}.${ext}` //fecha en formato UNIX
        cb(null, filename)
    }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;