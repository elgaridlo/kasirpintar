const axios = require('axios').default
const {getAlamat} = require('../alamat/alamatfunction.helper')


test('Check kecamatan berdasarkan ID', async() => {    
    const {data} = await axios.get('https://kasirpintar.co.id/allAddress.txt')

    const alamat = getAlamat(data.address_kecamatan, 'id', '1107050')

    expect(alamat.length).toBe(1)
})

test('Check kecamatan berdasarkan ID', async() => {    
    const {data} = await axios.get('https://kasirpintar.co.id/allAddress.txt')

    const alamatKota = getAlamat(data.address_kecamatan, 'kota_id', '1107')

    expect(alamatKota.length).toBe(12)
})