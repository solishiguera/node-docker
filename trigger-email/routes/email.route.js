const express = require('express')
const router = express.Router()
const emailController = require('../controller/email.controller')

router.get('/:from_email', emailController.getByEmail)
router.post('/', emailController.trigger)

module.exports = router;