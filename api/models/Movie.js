const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    titleImg: { type: String, required: true },
    posterImg: { type: String, required: true },
    coruselImg: { type: String, required: true },
    limit: { type: Number, required: true },
    year: { type: Number },
    trailer: { type: String },
    movie: { type: String },
    genre: { type: String, required: true },
    isSeries: { type: String, required: true, default: false },
  },
  { timeStamps: true }
)

module.exports = mongoose.model('Movie', MovieSchema)
