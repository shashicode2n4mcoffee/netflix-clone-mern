const User = require('../models/User')
var CryptoJS = require('crypto-js')

//Register controller
exports.register = async (req, res) => {
  console.log(req.body.password)
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  })

  try {
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

//Login controller
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    //Check email
    !user && res.status(401).send('Wrong Email')

    //decrypt password
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
    const originalPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

    originalPassword.toString() !== req.body.password &&
      res.status(401).send('Wrong password')

    //send back user data
    const { password, ...info } = user._doc
    user && res.status(201).send(info)
  } catch (error) {
    res.status(500).send(error)
  }
}
