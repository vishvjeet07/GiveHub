const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../config/multer-config');
const Grid = require('gridfs-stream');

router.get('/uploaddoc', uploadController.uploaddoc);

router.post('/upload', upload.single("file"), uploadController.upload)

module.exports = router;