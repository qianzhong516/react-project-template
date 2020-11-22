const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.post('/user/login', userController.login)

module.exports = userRouter