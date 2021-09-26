const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  genre: { type: String },
  content: { type: Array },
})

module.exports = mongoose.model('List', ListSchema)
