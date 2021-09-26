const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const movieRoute = require('./routes/movies')

//Load env
dotenv.config({ path: './config/config.env' })

//Connect Database
connectDB()

app.use(express.json())

//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/movie', movieRoute)

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running on port ${process.env.PORT}`)
)
