const express = require('express')
const router = express.Router()
const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovies,
  getRandomMovie,
} = require('../controllers/movies')
const verifyToken = require('../helpers/verifyToken')

//Create movies
router.post('/', verifyToken, createMovie)

//update movie
router.put('/:id', verifyToken, updateMovie)

//delete Movie
router.delete('/:id', verifyToken, deleteMovie)

//get all movies
router.get('/', verifyToken, getMovies)

//get random movies
router.get('/', verifyToken, getRandomMovie)

module.exports = router
