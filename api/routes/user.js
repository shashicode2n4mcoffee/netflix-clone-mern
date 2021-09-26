const express = require('express')
const router = express.Router()
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require('../controllers/user')
const verifyToken = require('../helpers/verifyToken')

//upadte user
router.put('/:id', verifyToken, updateUser)

//delete user
router.delete('/:id', verifyToken, deleteUser)

//get user details
router.get('/find/:id', verifyToken, getUser)

//get all user details
router.get('/', verifyToken, getAllUsers)

module.exports = router
