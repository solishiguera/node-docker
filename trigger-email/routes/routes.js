const express = require('express');
const router = express.Router();

router.use('/email', require('./email.route'));
router.use('/status', require('./status.route'));

module.exports = router;