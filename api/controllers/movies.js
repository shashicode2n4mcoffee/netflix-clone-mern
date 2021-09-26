const Movie = require('../models/Movie')

// create movie controller
exports.createMovie = async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body)
    try {
      const savedMovie = await newMovie.save()
      res.status(200).send(savedMovie)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You are not allowed to access the data')
  }
}

//update Movie

exports.updateMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
      res.status(200).send(updatedMovie)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You dont have acess to update the movie')
  }
}

//delete movie
exports.deleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
      res.status(200).send('Movie is successfully deleted')
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You dont have acess to delete movie')
  }
}

//get movies

exports.getMovies = async (req, res) => {
  const query = req.query
  console.log(query)
  try {
    const movies = await Movie.find()
      .sort({ _id: query.sort })
      .limit(query.limit)
      .skip(query.skip)
    res.status(200).send(movies)
  } catch (error) {
    res.status(500).send(error)
  }
}

//get random

exports.getRandomMovie = async (req, res) => {
  const type = req.query.type
  console.log(type)
  if (type === 'series') {
    const series = Movie.aggregate([
      { $match: { isSeries: true } },
      { $sample: { size: 1 } },
    ])
    res.status(200).send(series)
  } else {
    const movies = Movie.aggregate([
      { $match: { isSeries: false } },
      { $sample: { size: 1 } },
    ])
    req.status(200).send(movies)
  }
}
