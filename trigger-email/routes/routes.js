const express = require('express');
const router = express.Router();

router.use('/users', require('./users.route'));
router.use('/status', require('./status.route'));

module.exports = router;