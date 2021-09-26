const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//Load env
dotenv.config({ path: './config/config.env' })

//Connect Database
connectDB()

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running on port ${process.env.PORT}`)
)
