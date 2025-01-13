const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { isLoggedIn } = require('../middleware/isLoggedIn');

router.get('/dashboard', isLoggedIn, dashboardController.dashboard);
router.get('/download/:id', dashboardController.download);
router.get('/about', isLoggedIn, dashboardController.about);
router.get('/contact', isLoggedIn, dashboardController.contact);
router.post('/feedback', isLoggedIn, dashboardController.feedback);

module.exports = router;