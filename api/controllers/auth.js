const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

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

    //JWT token
    const accesstoken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '5d' }
    )

    //send back user data
    const { password, ...info } = user._doc
    user && res.status(201).send({ ...info, accesstoken })
  } catch (error) {
    res.status(500).send(error)
  }
}
