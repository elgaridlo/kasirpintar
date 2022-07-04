const express = require('express')
const { login, protect } = require('../authentication/authentication.controller')
const { alamatById, alamatByKotaId } = require('./alamat.controller')
const router = express.Router()

router.route('/alamat/:id').get(protect, alamatById)
router.route('/alamatKota/:id').get(protect, alamatByKotaId)
router.route('/login').post(login)

module.exports = router