const express = require('express')
const router = express.Router()
const userController = require('../controller/users.controller')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUserById)

module.exports = router;