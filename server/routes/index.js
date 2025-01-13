const express = require('express');
const router = express.Router();
const mainCntroller = require('../controllers/maincontroller');

router.get('/',mainCntroller.homepage);
router.get('/learnmore',mainCntroller.learnmore);

module.exports = router;