require('dotenv').config()
import express from 'express'
import github from './controller/github'

const app = express()
app.use('/api', github)

app.listen( process.env.PORT, () => {
    console.log(`the app is running on ${process.env.PORT}`)
})