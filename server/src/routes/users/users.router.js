const express = require('express')
const { httpGetAllUsers, httpGetSingleUser, httpCreateUser } = require('./users.controller')

const usersRouter = express.Router()

usersRouter.get('/', httpGetAllUsers)
usersRouter.get('/:id', httpGetSingleUser)
usersRouter.post('/', httpCreateUser)

module.exports = usersRouter