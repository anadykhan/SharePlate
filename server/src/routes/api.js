const express = require('express')

const donationsRouter = require('./donations/donations.router')

const api = express.Router()

api.use('/donations', donationsRouter)

module.exports = api