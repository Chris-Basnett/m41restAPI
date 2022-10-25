const {Router} = require('express')
const {createUser, readUsers, updateUser, deleteUser} = require('./userControllers')
const {hashPass} = require('../midware')

const userRouter = Router()

userRouter.get('/readUser', readUsers)
userRouter.post('/createUser', hashPass, createUser)
userRouter.put('/updateUser', updateUser)
userRouter.delete('/deleteUser/:username', deleteUser)

module.exports = userRouter