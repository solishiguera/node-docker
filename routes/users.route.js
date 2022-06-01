const express = require('express')
const router = express.Router()
const userControllers = require('../controller/users.controller')

router.get('/:id', userControllers.getUserById)
router.post('/', userControllers.createUser)
router.delete('/:id', userControllers.deleteUser)

module.exports = router;