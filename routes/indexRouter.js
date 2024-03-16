const express = require('express');
const { home, guardar } = require('../controllers/indexController');
const upload = require('../middlewares/multer');

const router = express.Router();


router.get('/', home);
router.post('/guardar', upload.single('archivo'), guardar);

module.exports = router;