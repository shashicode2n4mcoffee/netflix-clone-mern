const express = require('express')
const router = express.Router()
const { createList, deleteList, getList } = require('../controllers/list')
const verifyToken = require('../helpers/verifyToken')

//Create movies
router.post('/', verifyToken, createList)

//delete Movie
router.delete('/:id', verifyToken, deleteList)

//get all movies
router.get('/', verifyToken, getList)

module.exports = router
