const List = require('../models/List')

// create list
exports.createList = async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body)
    try {
      const savedList = await newList.save()
      res.status(201).send(savedList)
    } catch (err) {
      res.status(500).send(err)
    }
  } else {
    res.status(403).send('You are not allowed!')
  }
}

//delete list
exports.deleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id)
      res.status(201).send('The list is deleted')
    } catch (err) {
      res.status(500).send(err)
    }
  } else {
    res.status(403).send('You are not allowed!')
  }
}

//get list

exports.getList = async (req, res) => {
  const typeQuery = req.query.type
  const genreQuery = req.query.genre
  let list = []
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ])
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ])
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }])
    }
    res.status(200).send(list)
  } catch (err) {
    res.status(500).send(err)
  }
}
