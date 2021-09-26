const mongoose = require('mongoose')

const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb is connected'))
    .catch((err) => console.log(err))

module.exports = connectDB
