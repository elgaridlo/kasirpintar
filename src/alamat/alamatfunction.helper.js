const getAlamat = (alamat, propertyChoose, value) => {
    const arrData = []
    alamat.map((item) => {
        if(item[propertyChoose] === value) {
            arrData.push(item)
        }
    })
    return arrData
}


module.exports = {getAlamat}