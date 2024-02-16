const express = require('express')
const {httpGetAllDonations, httpCreateDonation, httpGetSingleDonation, httpUpdateDonation} = require('./donations.controller')

const donationsRouter = express.Router()

donationsRouter.get('/', httpGetAllDonations)
donationsRouter.get('/:id', httpGetSingleDonation)
donationsRouter.post('/', httpCreateDonation)
donationsRouter.post('/update', httpUpdateDonation)

module.exports = donationsRouter