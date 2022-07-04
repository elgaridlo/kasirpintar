const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const {json, urlencoded} = require('body-parser')
const alamatRoute = require('./src/alamat/alamat.router')
const errorHandler = require('./src/errorHandler/errorHandler')

dotenv.config()

const app = express()

app.use(json())
app.use(urlencoded({extended:true}))
app.use(morgan('dev'))

app.use(alamatRoute)

app.all('*', (req,res) => {
    res.status(404).json({
        message: `URL ${req.originalUrl} tidak dapat ditemukan`
    })
})

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})

