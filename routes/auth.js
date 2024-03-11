// routes/auth.js
const express = require('express');
const router = express.Router();
const { signup, login, getLoginActivities } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/getLoginActivity', getLoginActivities);

module.exports = router;
