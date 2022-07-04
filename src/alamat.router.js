const express = require('express')
const { alamatById, alamatByKotaId } = require('./alamat.controller')
const router = express.Router()

router.route('/alamat/:id').get(alamatById)
router.route('/alamatKota/:id').get(alamatByKotaId)

module.exports = router