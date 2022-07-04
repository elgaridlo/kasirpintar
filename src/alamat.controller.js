const axios = require('axios').default
const {getAlamat} =require('./alamatfunction.helper')

const alamatById = async(req,res,next) => {

    const {id} = req.params
    console.log('req - ',req.params)
    const response = await axios.get('https://kasirpintar.co.id/allAddress.txt')

    const data = getAlamat(response.data.address_kecamatan, 'id', id)
    res.json({
        message: 'Success',
        data
    })
}

const alamatByKotaId = async(req,res,next) => {

    const {id} = req.params
    const response = await axios.get('https://kasirpintar.co.id/allAddress.txt')

    const data = getAlamat(response.data.address_kecamatan, 'kota_id', id)
    res.json({
        message: 'Success',
        data
    })
}

module.exports = {alamatById, alamatByKotaId}