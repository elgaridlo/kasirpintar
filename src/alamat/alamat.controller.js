const axios = require('axios').default
const {getAlamat} =require('./alamatfunction.helper')
const {errorHandler} = require('../errorHandler/errorHandler')
const AppError = require('../errorHandler/appError')

const alamatById = async(req,res,next) => {

    const {id} = req.params
    console.log('req - ',req.params)
    const {data: resp} = await axios.get('https://kasirpintar.co.id/allAddress.txt')    

    const data = getAlamat(resp.address_kecamatan, 'id', id)
    console.log('resp = ', data)

    if(data.length === 0) {
        return next(new AppError('ID tidak ditemukan', 500)) 
    }

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