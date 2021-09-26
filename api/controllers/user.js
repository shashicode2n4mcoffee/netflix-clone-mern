const crypto = require('crypto-js')
const User = require('../models/User')

//Upadte user
exports.updateUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = crypto.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEy
      ).toString()
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).send(updateUser)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You can update only your account')
  }
}

//Delete User

exports.deleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id)
      res.status(200).send('User is successfully deleted')
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You can only delete your account')
  }
}

//Get User

exports.getUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findById(req.user.id)
      res.status(200).send(user)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You can only see your data')
  }
}

//Get All Users

exports.getAllUsers = async (req, res) => {
  const query = req.query
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find()
            .sort({ _id: parseInt(query.sort) })
            .limit(parseInt(query.limit))
            .skip(parseInt(query.skip))
        : await User.find().limit(10)
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(403).send('You can only view your details')
  }
}
