const express = require('express')
const morgan = require('morgan')
const {json, urlencoded} = require('body-parser')

const app = express()

app.use(json())
app.use(urlencoded({extended:true}))
app.use(morgan('dev'))

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})

