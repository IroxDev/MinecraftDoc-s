const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send('Salut')
})

app.listen(process.env.PORT, () => {
    console.log('Serveur au ecoute a l\'url: http://localhost:3000/')
})