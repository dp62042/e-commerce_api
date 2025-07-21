// controllers/authController.js

import User from '../models/users.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

// @desc   Register new user
// @route  POST /api/v1/users/register
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' })
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400).json({ message: 'Invalid user data' })
  }
}

// @desc   Auth user & get token
// @route  POST /api/v1/users/login
export const loginUser = async (req, res) => {
  const { email, password } = req.body

  // Check for user
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401).json({ message: 'Invalid email or password' })
  }
}
