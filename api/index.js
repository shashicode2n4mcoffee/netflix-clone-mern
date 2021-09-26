const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoute = require('./routes/auth')

//Load env
dotenv.config({ path: './config/config.env' })

//Connect Database
connectDB()

app.use(express.json())

//router
app.use('/api/v1/auth', authRoute)

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running on port ${process.env.PORT}`)
)
